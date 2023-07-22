import React from 'react'
import BlogCard from './BlogCard'

export const BlogList = () => {
  return (
    <div>
        <BlogCard
            slug={ 'blog/slug-' }
            image={ 'https://doimages.nyc3.cdn.digitaloceanspaces.com/002Blog/DOxPaperspace.svg' }
            title={ 'Paperspace Joins DigitalOcean to Expand AI Capabilities' }
            author={ 'Joe Rogan' }
            date={ 'July 6, 2022' }
            duration={ '3' }
        />
    </div>
  )
}
