import axios from 'axios'
import { API } from '@/app.config'
import { TOKEN } from '@/app.config'
import { setProducts } from '../reducers/productReducer'

// Products
export const getAllProducts = (options?: any) => {
    return (dispatch: any) => {
        axios.get(`${ API.PRODUCTS }`, { headers: { Authorization: `${ TOKEN }` } })
            .then((res: any) => {
                const data = res?.data?.data?.data ?? []
                dispatch( setProducts(data) )
            })
            .catch((err: any) => {
                console.error(err)
                dispatch( setProducts([]) )
            })
    }
}