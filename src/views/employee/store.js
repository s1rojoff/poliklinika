import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = import.meta.env.VITE_APP_URL
export const useEmployeeStore = defineStore('employee', {
    state: () => {
        return {
            allEmployee: [],
            employee: {
                fname: "",
                sname: "",
                birthday: "",
                email: "",
                phone: "",
                job_id: ''
            },
            isUpdate: false,
            employee_id: ''
        }
    },
    actions: {
        getAllEmployees() {
            axios.get(`${baseUrl}api/employee`).then(res => {
                this.allEmployee = res.data
                // console.log(res.data);
            })
                .catch(err => {
                    console.log(err)
                })
        },
        deleteEmployee(id) {
            axios.delete(`${baseUrl}api/employee/${id}`).then(res => {
                this.getAllEmployees()
                return res.data
            })
                .catch(err => {
                    console.log(err)
                })
        },
        createEmployee(data) {
            axios.post(`${baseUrl}api/employee`, data).then(res => {
                this.getAllEmployees()
                return res.data
            }).catch(err => {
                console.log(err);
            })
        },
        updateEmployee(id, data) {
            axios.put(`${baseUrl}api/employee/${id}`, data).then(res => {
                this.getAllEmployees()
            }).catch(err => {
                console.log(err)
            })
        }
    }
})