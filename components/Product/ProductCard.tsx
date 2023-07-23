import React from 'react'
// Import Components
import { Image, Typography, Rate, Button, Avatar, Tooltip } from 'antd'

// Import Icons
import { HeartOutlined, UploadOutlined, ShoppingCartOutlined } from '@ant-design/icons'

// Constants
const { Text, Paragraph } = Typography

const ProductCard = ({ data, onAddToCartButtonClick, small }: any ) => {
  return (
    <div className='p-4 bg-white rounded-md shadow-lg' style={{ display: 'flex', height: 'auto', flexDirection: 'column', gap: 0, maxWidth: small ? '160px' : '258px', position: 'relative' }}>
      <Tooltip title="Add to cart">
        <Button 
          style={{ backgroundColor: 'blue', display: 'flex', alignItems: 'center', position: 'absolute', right: 4, top: 4, zIndex: 100 }} 
          size={ 'small' } 
          type={ 'primary' } 
          icon={ <ShoppingCartOutlined /> }
        >
          { 'Add' }
        </Button>
      </Tooltip>
      <Image style={{ borderRadius: '8px' }} src={ data?.image_ ?? '/images/xiaomi-redmi-note-8-1.jpg' } alt={ 'image' } preview={ false } />
      <Text strong>{ data?.name ?? '' }</Text>
      <span>
        <Rate 
          tooltips={ [ ''+data?.average_rating ?? 0 ] } 
          onChange={() => null} 
          value={ data?.average_rating ?? 0 } 
        />
        { data?.average_rating ? <span className="ant-rate-text">{ data?.average_rating ?? '' }</span> : ''}
        { data?.likes ? <span className="ant-rate-text">{ ` & ${ data?.likes ?? '' }Likes` }</span> : ''}
        <Button type={ 'link' } icon={ <HeartOutlined /> } />
      </span>
      <div style={{ padding: '0px 0px', textAlign: 'right' }}>
        <Text>{ '$ ' }</Text>
        <Text style={{ fontSize: small ? '16px' : '28px' }}>{ data?.price ?? '' }</Text>
      </div>
    </div>
  )
}

export default ProductCard