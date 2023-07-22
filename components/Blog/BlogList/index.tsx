import React from 'react'
import BlogCard from './BlogCard'

export const BlogList = ({ blogs }: any) => {
  return (
    <div className='flex flex-wrap justify-center w-full gap-8 p-12 align-top'>
        { blogs?.map((b: any, idx: any) => (
            <BlogCard
                key={ idx }
                slug={ b?.slug ?? '' }
                image={ b?.urlToImage ?? '' }
                title={ b?.title ?? '' }
                author={ b?.author ?? ''}
                date={ b?.publishedAt ?? '' }
                duration={ '3' }
            />
        )) }
    </div>
  )
}
