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
    <div className='flex flex-row items-center justify-center w-full bg-white'>
      <Row style={{ width: '100%' }} gutter={[ 0, 0 ]}>
        <Col 
          span={ 24 }
          className='flex flex-row items-center justify-end gap-4 px-4'
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
            { 'Logout' }
          </Button>
        </Col>
      </Row>
    </div>
  )
}

export default Navbar