<script setup>
import BaseButton from '../../components/BaseButton.vue';
import BaseModal from '../../components/BaseModal.vue';
import BaseInput from '../../components/BaseInput.vue';
import BaseJobCard from '../../components/BaseJobCard.vue';
import { storeToRefs } from 'pinia'
import { useJobStore } from './store'
import { useJobFn } from './composable';
const store = useJobStore()
const { allJobs, newJobName, isUpdate } = storeToRefs(store)
const { modal,createOrEditJobFn, deleteWithIdFn, getJobWithId, openingModalForCreate } = useJobFn()
</script>
<template>
    <main class="p-5 w-full">
        <div class="flex justify-between py-3">
            <h1 class="text-xl font-semibold">Mutaxasislik</h1>
            <BaseButton @click="openingModalForCreate" />
        </div>
        <!-- CONTENT -->
        <div class="mt-5 h-[90vh] overflow-y-scroll scrollbarActive">
            <div class="grid grid-cols-3 gap-3">
                <BaseJobCard v-for="(job, index ) in allJobs" :key="index" :cardInfo="job" @deleteItem="deleteWithIdFn"
                    @editItem="getJobWithId" />
            </div>
        </div>
    </main>
    <BaseModal :is-open-modal="modal" @cancel="modal = false" @create="createOrEditJobFn">
        <template #modalContent>
            <p class="text-xl text-center font-bold pb-3">{{ isUpdate ? "Mutaxasislikni tahrirlash" : "Mutaxasislik qo'shish" }}</p>
            <BaseInput v-model="newJobName" label="Mutaxasislik nomini kiriting" @keyup.enter="createOrEditJobFn" />
        </template>
    </BaseModal>
</template>