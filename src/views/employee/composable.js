import { useEmployeeStore } from './store'
import { useJobStore } from '../job/store'
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
export function useEmployeeFn() {
    const store = useEmployeeStore()

    const jobStore = useJobStore()
    const { getAllJobs } = jobStore
    const { allJobs } = storeToRefs(jobStore)
    const { getAllEmployees, deleteEmployee, createEmployee, updateEmployee } = store
    const { employee, isUpdate, allEmployee, employee_id } = storeToRefs(store)
    const modal = ref(false)
    onMounted(() => {
        getAllEmployees()
        getAllJobs()
    })

    function deleteEmployeeFn(id) {
        deleteEmployee(id)
    }

    function createOrEditEmployeeFn() {
        if (isUpdate.value) {
            for (let i = 0; i < allJobs.value.length; i++) {
                if (employee.value?.name == allJobs.value[i].name) {
                    employee.value.name = allJobs.value[i].id
                }
            }
            updateEmployee(employee_id.value, employee.value)
            employee.value = {
                fname: "",
                sname: "",
                birthday: "",
                email: "",
                phone: "",
                job_id: '',
                department_id: ''
            }
        }
        else {
            if (employee.value.job_id) {
                createEmployee(employee.value)
                employee.value = {
                    fname: "",
                    sname: "",
                    birthday: "",
                    email: "",
                    phone: "",
                    job_id: '',
                    department_id: ''
                }
            }
        }
        modal.value = false
    }
    function selectJobFn(event) {
        employee.value.job_id = event.target.value * 1
    }
    function getEmployeeWithId(id) {
        for (let i = 0; i < allEmployee.value.length; i++) {
            if (id == allEmployee.value[i].id) {

                delete allEmployee.value[i].id
                employee.value = allEmployee.value[i]
            }
        }
        modal.value = true
        isUpdate.value = true
    }

    function cancelActionFn() {
        modal.value = false
        employee.value = {
            fname: "",
            sname: "",
            birthday: "",
            email: "",
            phone: "",
            job_id: '',
            department_id: ''
        }
    }
    return {
        modal,
        deleteEmployeeFn,
        createOrEditEmployeeFn,
        selectJobFn,
        getEmployeeWithId,
        cancelActionFn
    }
}