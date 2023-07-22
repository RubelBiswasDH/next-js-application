import { useEffect } from 'react'

// Import Components
import { Button, Row, Col, Typography } from 'antd'

// Import Icons
import { LogoutOutlined } from '@ant-design/icons'

// Import Actions & Methods
import { useAppDispatch, useAppSelector } from '../../redux/store'
import { setUser } from '@/redux/reducers/authReducer'
import { logout } from '@/redux/actions/authActions'

// Const
const { Text } = Typography


const Navbar = () => {
  const dispatch = useAppDispatch()

  // Redux Store Data
  const user: any = useAppSelector(state => state?.auth?.user ?? {})

  // On Logout
  const _onLogout = () => {
    dispatch( logout() )
  }

  useEffect(() => {
    const user = localStorage.getItem('user')
    if(user){
        dispatch( setUser( JSON.parse(user) ))
    }
  }, [])

  return (
    <div style={ containerStyles }>
      <Row style={{ width: '100%' }} gutter={[ 0, 0 ]}>
        <Col 
          span={ 24 }
          style={{ 
            display: 'flex', 
            flexDirection: 'row' as 'row', 
            justifyContent: 'flex-end', 
            alignItems: 'center',
            gap: '16px',
            padding: '0px 0px'
          }}
        >
          <span className='flex items-center justify-center'>
            <Text  className='flex items-center capitalize hover:uppercase'>
              { user?.name ? user?.name?.toLowerCase() : 'Unknown' }
            </Text>
          </span>
          <Button
            icon={ <LogoutOutlined /> }
            onClick={ _onLogout }
            className='flex items-center'
          >
            Logout
          </Button>
        </Col>
      </Row>
    </div>
  )
}

// JSS Styles
const containerStyles = {
  display: 'flex',
  width: '100%',
  flexDirection: 'row' as 'row',
  justifyContent: 'flex-start',
  alignItems: 'center',
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  padding: '32px 24px',
  margin: '0px 0px',
  backgroundColor: '#FFFFFF'
}


export default Navbar