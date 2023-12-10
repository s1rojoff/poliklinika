import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = import.meta.env.VITE_APP_URL
import { setItem } from '../../helper/localStorage'
export const useStoreAuth = defineStore('authStore', {
    // arrow function recommended for full type inference
    state: () => {
        return {
            user: {
                name: '',
                password: ''
            }
        }
    },
    actions: {
        getAccessToken(data) {
            axios.post(`${baseUrl}api/login`, data).then(res => {
                setItem('Authorization', res.data.accessToken)
                setItem('refreshToken', res.data.refreshToken)
                return res
            }).catch(err => {
                return err
            })
        }
    }
})