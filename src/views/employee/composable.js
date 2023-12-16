import { useEmployeeStore } from './store'
import { useJobStore } from '../job/store'
import { useDepartmentStore } from '../department/store';
import { storeToRefs } from 'pinia'
import { ref, onMounted } from 'vue'
export function useEmployeeFn() {
    const store = useEmployeeStore()
    const departmentStore = useDepartmentStore()
    const jobStore = useJobStore()
    const { getAllJobs } = jobStore
    const { getAllDepartment } = departmentStore
    const { allJobs } = storeToRefs(jobStore)
    const { allDepartments } = storeToRefs(departmentStore)
    const { getAllEmployees, deleteEmployee, createEmployee, updateEmployee } = store
    const { employee, isUpdate, allEmployee, employee_id } = storeToRefs(store)
    const modal = ref(false)
    onMounted(() => {
        getAllEmployees()
        getAllJobs()
        getAllDepartment()
    })

    function deleteEmployeeFn(id) {
        deleteEmployee(id)
    }

    function createOrEditEmployeeFn() {
        if (isUpdate.value) {
            updateEmployee(employee_id.value, employee.value)
        }
        else {
            createEmployee(employee.value)
        }
        modal.value = false
    }
    function selectJobFn(id) {
        employee.value.job_id = id
    }
    function selectDepartmentFn(id) {
        employee.value.department_id = id
    }
    function getEmployeeWithId(id) {
        for (let i = 0; i < allEmployee.value.length; i++) {
            if (id == allEmployee.value[i].id) {
                employee.value.fname = allEmployee.value[i].fname
                employee.value.sname = allEmployee.value[i].sname
                employee.value.birthday = allEmployee.value[i].birthday
                employee.value.phone = allEmployee.value[i].phone
                employee.value.email = allEmployee.value[i].email
                allJobs.value.forEach(job => {
                    if (allEmployee.value[i].job_name == job.name) {

                        employee.value.job_id = job.id
                    }
                })
                allDepartments.value.forEach(department => {
                    if (allEmployee.value[i].department_name == department.name) {
                        employee.value.department_id = department.id
                    }
                })
            }
        }
        employee_id.value = id
        modal.value = true
        isUpdate.value = true
    }
    function openModalFn() {
        modal.value = true
        isUpdate.value = false
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
        cancelActionFn,
        selectDepartmentFn,
        openModalFn
    }
}