import { useEffect } from 'react'
import { Spin } from 'antd'
import { BlogList } from '@/components/Blog/BlogList'

// Import Hooks
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/store'
import type { GetServerSideProps } from 'next'

// Import Actions and Utils
import { isValidatedUser } from '@/redux/actions/authActions'

export const getServerSideProps: GetServerSideProps = async () => {
    const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : ""
    const res = await fetch(`${ BASE_URL }/api/blogs`)
    const blogs = await res.json()
    return { props: { blogs } }
  }

export default function Blog({ blogs }: any) {
  const router = useRouter()
  const dispatch = useAppDispatch()

  const isAuthenticating = useAppSelector(state => state?.auth?.isAuthenticating ?? true)
  const isAuthenticated = useAppSelector(state => state?.auth?.isAuthenticated ?? false)
  
  useEffect(() => {
    const isVaildUser = dispatch( isValidatedUser() )
    if(!isVaildUser){
      router.push('/login')
    }
  }, [])

  if(!isAuthenticated || isAuthenticating){
    return <div className='flex items-center justify-center h-full min-w-full'>
      <Spin />
    </div>
  }

  return (
    <div
      className={`flex min-h-screen flex-col items-center justify-between`}
    >
        <BlogList blogs={ blogs } />
    </div>
  )
}
