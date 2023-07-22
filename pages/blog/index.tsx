import { useEffect } from 'react'
import Link from 'next/link'
import { Spin, Alert, Button, Space } from 'antd'
import { BlogList } from '@/components/Blog/BlogList'

// Import Hooks
import { useRouter } from 'next/router'
import { useAppDispatch, useAppSelector } from '@/redux/store'

// Import Actions and Utils
import { isValidatedUser } from '@/redux/actions/authActions'

export default function Blog() {
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
        <BlogList />
    </div>
  )
}
