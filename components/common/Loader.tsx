import React from 'react'
import { Spin } from 'antd'

export const Loader = () => {
  return (
    <div className='flex items-center justify-center h-full min-w-full'>
      <Spin />
    </div>
  )
}

export default Loader