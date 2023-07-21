import axios from "axios"
import { API, TOKEN } from '@/app.config'
import { message } from "antd"
import { setCookie } from "@/utils/utils"

// Register New User
export const registration = (data: any) => {
    const key = 'registration'
    message.loading({ content: 'Processing', key: key })
    return (dispatch: any) => {
        axios.post(API.REGISTRATION, data, { headers: { Authorization: `${ TOKEN }` } })
            .then((res: any) => {
                const msg: any = res?.data?.message ?? ''
                message.success({ content: msg, key: key })
                window.location.href = '/login'
            })
            .catch((err: any) => {
                console.log({ err })
                message.error({ content: 'Failed to Register', key: key })
            })
    }
}

// Login Action
export function login(user: any) {
    return (dispatch: any) => {
        // Set `isValidating`
        const key = 'login'
        message.loading({ content: 'Checking credentials....', key })
        axios.post(API.LOGIN, user, { headers: { Authorization: `${ TOKEN }` } })
            .then(res => {
                const user = res?.data?.data ?? {}
                const token = res?.data?.data?.token || ''
                const msg: any = res?.data?.message ?? ''
                localStorage.setItem('user', JSON.stringify(user))
                setCookie('token', token)
                message.success({ content: msg, key: key })
            })
            .catch(err => {
                console.error(err)
                message.error({ content: 'Failed to Login', key: key })
            })
    }
}