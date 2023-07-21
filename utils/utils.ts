import Cookies from 'js-cookie'

export const setCookie = (name: string, value: any, options?: any) =>{
    Cookies.set(name, value, { expires: 365, ...options })
}

export const getCookie = (name: string) => {
    return Cookies.get(name) ?? null
}

export const deleteCookie = (name: any) => {
    Cookies.remove(name)
}
