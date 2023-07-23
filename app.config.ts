export const TOKEN = process.env.NEXT_PUBLIC_TOKEN || ''

export const AUTOCOMPLETE_API = 'https://api.bmapsbd.com/search/autocomplete/web?search='
export const BASE_URL = 'https://app-area.bestu.com.bd/api/nextjs'

export const API = {
    REGISTRATION: `${ BASE_URL }/user/registration`,
    LOGIN: `${ BASE_URL }/user/login`,
    PRODUCTS: `${ BASE_URL }/products`,
}