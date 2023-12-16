<script setup>
import { storeToRefs } from 'pinia'
import BaseEmployeeCard from '../../components/BaseEmployeeCard.vue';
import BaseModal from '../../components/BaseModal.vue';
import BaseButton from '../../components/BaseButton.vue'
import BaseInput from '../../components/BaseInput.vue';
import BaseSelect from '../../components/BaseSelect.vue'
import { useJobStore } from '../job/store';
import { useDepartmentStore } from '../department/store';
import { useEmployeeStore } from './store';
import { useEmployeeFn } from './composable'
const jobStore = useJobStore()
const departmentStore = useDepartmentStore()
const {allDepartments} = storeToRefs(departmentStore)
const { allJobs } = storeToRefs(jobStore)
const store = useEmployeeStore()
const { modal, deleteEmployeeFn, createOrEditEmployeeFn,selectDepartmentFn, openModalFn,selectJobFn, getEmployeeWithId, cancelActionFn } = useEmployeeFn()
const { allEmployee, employee, isUpdate } = storeToRefs(store)

</script>
<template>
    <main class="p-5 w-full">
        <div class="flex justify-between py-3">
            <h1 class="text-xl font-semibold">Hodimlar</h1>
            <BaseButton @click="openModalFn" />
        </div>
        <!-- <BaseTable :tableBody="fake" /> -->
        <div class="h-[90vh] overflow-y-scroll scrollbarActive pb-5">
            <div class="grid grid-cols-3 gap-3">
                <BaseEmployeeCard v-for="item, index in allEmployee" :key="index" :cardInfo="item"
                    @delete="deleteEmployeeFn" @edit="getEmployeeWithId"/>
            </div>
        </div>
    </main>
    <BaseModal :is-open-modal="modal" @cancel="cancelActionFn" @create="createOrEditEmployeeFn">
        <template #modalContent>
            <p class="text-xl text-center font-bold pb-3">{{ isUpdate ? "Hodimni tahrirlash" : "Hodim qo'shish" }}</p>
            <BaseInput class="py-1" v-model="employee.fname" label="Ismi" />
            <BaseInput class="py-1" v-model="employee.sname" label="Familyasi" />
            <BaseInput class="py-1" v-model="employee.birthday" type="date" label="Tug'ilgan sanasi" />
            <BaseInput class="py-1" v-model="employee.email" label="E-mail" />
            <BaseInput class="py-1" v-model="employee.phone" label="Telefon raqami" />
            <BaseSelect class="py-1" v-model="employee.job_id" :options="allJobs" @selected="selectJobFn($event)" label="Mutaxasisligi" />
            <BaseSelect class="py-1" v-model="employee.department_id" :options="allDepartments" @selected="selectDepartmentFn($event)" label="Bo'lim" />
        </template>
    </BaseModal>
</template>
<style>
.scrollbarActive::-webkit-scrollbar {
    @apply ease-in duration-300;
    width: 2px;
    height: 0;
    /* display: none; */
    opacity: 0;
}

.scrollbarActive::-webkit-scrollbar-track {
    @apply bg-inherit opacity-0;
}

.scrollbarActive::-webkit-scrollbar-thumb {
    @apply dark:bg-[rgb(37, 48, 64)] bg-slate-400 hover:bg-slate-500 hover:dark:bg-slate-600 opacity-0 ease-in duration-300 transition rounded-md cursor-pointer;
}
</style>