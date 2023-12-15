import { storeToRefs } from "pinia"
import { onMounted, ref } from 'vue'
import { useDepartmentStore } from "./store"
export function useDepartment() {
    const store = useDepartmentStore()
    const { getAllDepartment, createDepartment, updateDepartment } = store
    const { allDepartments, isUpdate, department, departmentId } = storeToRefs(store)
    const modal = ref(false)
    onMounted(() => {
        getAllDepartment()
    })
    function createNewDepartment(date) {
        createDepartment(date)
        modal.value = false
    }
    function editDepartment(id) {
        allDepartments.value.forEach((el) => {
            if (el.id == id) {
                console.log(el)
                department.value.name = el.name
                department.value.code = el.code
            }
        })
        departmentId.value = id
        modal.value = true
        isUpdate.value = true
    }

    function openModalFn() {
        modal.value = true
        isUpdate.value = false
    }


    function createOrUpdateFn(data) {
        if (isUpdate.value) {
            updateDepartment(departmentId.value, data)
        }
        else {
            createNewDepartment(data)
        }
        modal.value = false
    }

    return {
        modal,
        createNewDepartment,
        editDepartment,
        createOrUpdateFn,
        openModalFn
    }
}