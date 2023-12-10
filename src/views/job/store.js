import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = import.meta.env.VITE_APP_URL
export const useJobStore = defineStore('job', {
    state: () => {
        return {
            allJobs: [],
            newJobName: '',
            isUpdate: false,
            jobId: ''
        }
    },
    actions: {
        getAllJobs() {
            axios.get(`${baseUrl}api/job`).then(res => {
                this.allJobs = res.data
            }).catch(err => {
                console.log(err)
            })
        },
        createNewJob(data) {
            axios.post(`${baseUrl}api/job`, data).then(res => {
                this.getAllJobs()
            }).catch(err => {
                console.log(err)
            })
        },
        deleteJob(id) {
            axios.delete(`${baseUrl}api/job/${id}`).then(res => {
                this.getAllJobs()
            }).catch(err => {
                console.log(err)
            })
        },
        editJob(id, data) {
            axios.put(`${baseUrl}api/job/${id}`, data).then(res => {
                this.getAllJobs()
            }).catch(err => {
                console.log(err)
            })
        }
    }
})