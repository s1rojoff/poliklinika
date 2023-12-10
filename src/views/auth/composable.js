import { useStoreAuth } from "./store"
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router';
import { getItem } from "../../helper/localStorage";
import { ref } from 'vue'
export function useAuthFn() {
    const store = useStoreAuth()
    const router = useRouter()
    // const { user } = storeToRefs(store)
    const user = ref({
        name: '',
        password: ''
    })
    const { getAccessToken } = store
    function getAccessToAccount() {
        getAccessToken(user.value)
        // const isAuthenticated = getItem('Authorization');
        // console.log(isAuthenticated);
        router.push({ name: 'Dashboard' })
    }
    return {
        getAccessToAccount,
        user
    }
}