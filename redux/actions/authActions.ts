import axios from "axios"
import { API, TOKEN } from '@/app.config'
import { message } from "antd"

// Register New User
export const registration = (data: any) => {
    const key = 'registration'
    message.loading({ content: 'Processing', key: key })
    return (dispatch: any) => {
        axios.post(API.REGISTRATION, data, { headers: { Authorization: `${ TOKEN }` } })
            .then((res: any) => {
                console.log({ res })
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