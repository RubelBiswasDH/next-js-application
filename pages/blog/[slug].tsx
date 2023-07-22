// Import Hooks
import type { GetServerSideProps } from 'next'

export const getServerSideProps: GetServerSideProps = async ({ query }: any) => {
    const { slug } = query
    const BASE_URL = process.env.NODE_ENV === "development" ? "http://localhost:3000" : "https://next-js-application-chi.vercel.app"
    const data = await fetch(`${ BASE_URL }/api/blog/${ slug }`)
    const blog = await data.json()
    return { props: { blog } }
  }

export default function Blog({ blog }: any) {
  return (
    <div className={`flex min-h-screen flex-col items-center justify-between`}>
        <div className='flex flex-col w-3/4 lg:w-[1024px] py-16 gap-6'>
            <h1 className='text-4xl font-bold'>{ blog?.title ?? '' }</h1>
            <div className='flex items-center justify-center gap-4'>
                <div className='w-12 h-12 overflow-hidden border-2 border-dashed rounded-full border-sky-500'>
                    <img className='w-auto h-full' src="https://doimages.nyc3.digitaloceanspaces.com/YanceySpruill.jpg" alt={ 'author-photo' }/>
                </div>
                <h6 className='text-base leading-none text-blue-400'>{ blog?.author ?? '' }</h6>
            </div>
            <div className='flex items-center justify-center text-sm text-gray-500'>
                { `Posted: ${ blog?.publishedAt ?? '' } - ${ '3' } min read` }
            </div>
            { new Array(9).fill({}).map((d: any, idx: any) => ( 
                <p key={ idx } className='flex text-justify'>
                    { blog?.content ?? '' }
                    { blog?.description ?? '' }
                </p>))
            }
        </div>
    </div>
  )
}
