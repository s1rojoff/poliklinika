import { ref, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { useJobStore } from './store'
export function useJobFn() {
    const store = useJobStore()
    const { allJobs, newJobName, isUpdate, jobId } = storeToRefs(store)
    const { getAllJobs, createNewJob, deleteJob, editJob } = store
    const modal = ref(false)
    onMounted(() => {
        getAllJobs()
    })
    function deleteWithIdFn(id) {
        deleteJob(id)
    }
    function getJobWithId(id) {
        for (let i = 0; i < allJobs.value.length; i++) {
            if (id == allJobs.value[i].id) {
                newJobName.value = allJobs.value[i].name
            }
        }
        jobId.value = id
        isUpdate.value = true
        modal.value = true
    }
    function openingModalForCreate() {
        newJobName.value = ''
        isUpdate.value = false
        modal.value = true
    }

    function createOrEditJobFn() {
        if (isUpdate.value) {
            editJob(jobId.value, { name: newJobName.value })
            newJobName.value = ''
            modal.value = false
        }
        else {
            if (newJobName.value) {
                createNewJob({ name: newJobName.value })
                newJobName.value = ''
                modal.value = false
            }
        }
    }

    return {
        modal,
        getAllJobs,
        createOrEditJobFn,
        deleteWithIdFn,
        getJobWithId,
        openingModalForCreate
    }
}