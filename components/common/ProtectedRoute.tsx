import PropTypes from 'prop-types'

// Import Action and Methods
import { isPermitted } from '@/utils/utils'

const ProtectedRoute = ({ children }: any) => {

    return (
        isPermitted()
        ?
        <>{ children }</>
        :
        <div style={ containerStyles }>
            { `You don't have permission to view this page.` }
        </div>
    )
}

// PropTypes
ProtectedRoute.propTypes = {
    children: PropTypes.any
}

// JSX Styles
const containerStyles = { 
    width: '100%',
    marginLeft: '0px',
    marginRight: '0px',
    padding: '12px 0px',
    backgroundColor: 'fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
}

export default ProtectedRoute