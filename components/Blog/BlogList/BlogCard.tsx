import React from 'react'
import Link from 'next/link'

const BlogCard = ({ slug, image, title, author, date, duration }: any) => {
  return (
    <Link href={ slug ? `/blog/${ slug }` : '' }>
        <div className={ 'flex flex-col rounded-3xl shadow-xl overflow-hidden w-64' }>
            <span className='w-full h-32 overflow-hidden'>
                <img 
                    className='object-cover w-full h-full'
                    src={ image } 
                    alt="blog-thumb"
                />
            </span>
            <span className='flex flex-col flex-wrap w-full gap-2 p-4'>
                <h4 className='text-base font-bold text-black'>{ title }</h4>
                <span className='flex flex-col gap-0'>
                    <h6 className='text-base leading-none text-blue-400'>{ author }</h6>
                    <span className='text-gray-500'>
                        { `${ date } - ${ duration } min read` }
                    </span>
                </span>
            </span>
        </div>
    </Link>
  )
}

export default BlogCard