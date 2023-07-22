// Import Components
import { Layout } from 'antd'
import Navbar from '@/components/Navbar'

// Constants
const { Header, Content } = Layout

const MainLayout = ({ children }: any) => {

  return (
    <div style={ containerStyles }>
      <Layout hasSider>
        <Layout>
          <Header style={ headerStyles }>
            <Navbar />
          </Header>
          <Content style={{ ...contentStyles, width: '100%' }}>
            { children }
          </Content>
        </Layout>
      </Layout>
    </div>
  )
}

// JSS Styles
const containerStyles = {
  width: '100%',
  height: '100%',
  overflow: 'hidden',
  padding: '0px 0px'
}

const headerStyles = {
  boxSizing: 'border-box' as 'border-box',
  padding: '0px 0px',
  background: '#ffffff',
  height: '44px',
  display: 'flex',
  flexDirection: 'row' as 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  borderBottom: '1px solid #f0f2f5'
}

const contentStyles = {
  width: '100%',
  height: 'calc(100vh - 44px)',
  padding: '0.75rem 0.5rem',
  backgroundColor: '#fff',
  display: 'flex',
  flexDirection: 'column' as 'column',
  justifyContent: 'flex-start',
  alignItems: 'stretch',
  rowGap: '1rem',
  overflow: 'auto',
  background: 'rgb(242 242 242)'
}

export default MainLayout