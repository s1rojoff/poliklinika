import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = import.meta.env.VITE_APP_URL
export const useDepartmentStore = defineStore('departmentStore', {

    state: () => {
        return {
            allDepartments: [],
            isUpdate: false,
            department: {
                name: '',
                code: ''
            },
            departmentId: ''
        }
    },
    actions: {
        getAllDepartment() {
            axios.get(`${baseUrl}api/department`).then(res => {
                this.allDepartments = res.data
                return res
            }).catch(err => {
                console.log(err)
                return err
            })
        },
        deleteDepartment(id) {
            axios.delete(`${baseUrl}api/department/${id}`).then((res) => {
                this.getAllDepartment()
                return res
            })
                .catch((err) => {
                    return err
                })
        },
        createDepartment(data) {
            axios.post(`${baseUrl}api/department`, data).then(res => {
                this.getAllDepartment()
                this.department.code = ''
                this.department.name = ''
                return res
            }).catch(err => {
                console.log(err)
                return err
            })
        },
        updateDepartment(id, data) {
            axios.put(`${baseUrl}api/department/${id}`, data).then((res) => {
                this.getAllDepartment()
                this.department.code = ''
                this.department.name = ''
                return res
            }).catch(err => {
                return err
            })
        }
    }
})