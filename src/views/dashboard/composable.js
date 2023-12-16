import { useDashboardStore } from "./store"
import { onMounted, ref } from 'vue'
import { storeToRefs } from "pinia"
export function useDashboardFn() {
    const store = useDashboardStore()
    const { getStatisticDashboard } = store
    const { dashboardResult , departmentData, departmentNames} = storeToRefs(store)
    onMounted(() => {
        getStatisticDashboard()
    })
    return {
        
    }
}