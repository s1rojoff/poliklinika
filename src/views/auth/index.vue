<script setup>
// import { useStoreAuth } from './store'
import { useAuthFn } from './composable';
const { user, getAccessToAccount } = useAuthFn()
</script>
<template>
    <div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
            <div class="flex justify-center">
                <svg width="94" height="20" viewBox="0 0 94 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M31.6157 20H34.7664L41.8309 11.292L39.8362 20H46.5671L49.9433 5.26132L52.8071 5.26328L49.4314 20H66.3304L67.5077 14.8609H57.3396L57.9609 12.1485H67.8711L68.8522 7.86589H58.9419L59.537 5.26787L72.4241 5.27674L69.0515 20H81.2531C100.847 20 97.4012 -0.623259 70.9085 0.0144921H54.0095H51.1452H44.4143H31.1527H26.8565H24.5154H24.4218H24.2558H1.90275H1.02297L0 5.2323L6.00539 5.23639L2.62348 20H9.35451L12.7353 5.24102L23.2241 5.243L19.8438 20H26.5747L28.5694 11.292L31.6158 20L31.6157 20ZM19.9815 10.4494C19.8995 10.8093 19.0076 14.7321 18.9976 14.7321C18.4468 14.7321 12.8083 14.7341 12.8094 14.7293C13.1396 13.3025 13.4683 11.8755 13.8017 10.4494C13.8022 10.4473 19.9815 10.449 19.9815 10.4494ZM39.8999 5.25439L35.3624 10.5211L33.2504 5.2498L39.8999 5.25439H39.8999ZM78.917 5.90308L76.9597 14.8608C92.3758 15.9643 88.8675 7.02293 78.917 5.90308Z"
                        fill="currentColor"></path>
                </svg>
            </div>
            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign in to your account
            </h2>
        </div>

        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <div>
                <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div class="mt-2">
                    <input v-model="user.name" id="name"
                        class="block w-full outline-none px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div>
                <div class="flex items-center justify-between">
                    <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
                </div>
                <div class="mt-2">
                    <input id="password" v-model="user.password" name="password"
                        class="block w-full px-2 outline-none rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
                </div>
            </div>

            <div class="pt-5">
                <button @click="getAccessToAccount"
                    class="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign
                    in</button>
            </div>
        </div>
    </div>
</template>