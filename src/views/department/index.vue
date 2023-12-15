<script setup>
import { storeToRefs } from 'pinia';
// import { onMounted } from 'vue';
import BaseButton from '../../components/BaseButton.vue';
import BaseModal from '../../components/BaseModal.vue';
import BaseInput from '../../components/BaseInput.vue';
// import BaseJobCard from '../../components/BaseJobCard.vue';
import { useDepartmentStore } from "./store"
import { useDepartment } from './composable';
const { modal, openModalFn, editDepartment, createOrUpdateFn } = useDepartment()
const store = useDepartmentStore()
const { deleteDepartment } = store
const { allDepartments, isUpdate, department } = storeToRefs(store)
</script>
<template>
    <main class="p-5 w-full">
        <div class="flex justify-between py-3">
            <h1 class="text-xl font-semibold">Bo'limlar</h1>
            <BaseButton @click="openModalFn" />
        </div>
        <!-- CONTENT -->
        <div class="w-full bg-white rounded-md px-3 mt-3">
            <div class="grid grid-cols-5 py-2 border-b">
                <p v-for="item, index in ['ID', 'Name', 'Code', 'Action']" :class="{ 'col-span-2': index == 1 }"
                    :key="index">
                    {{ item }}
                </p>
            </div>
            <div>
                <div class="grid grid-cols-5 py-2 border-b items-center" v-for="item, index in allDepartments" :key="index">
                    <p>{{ item?.id }}</p>
                    <p class="col-span-2">{{ item?.name }}</p>
                    <p>{{ item?.code }}</p>
                    <div class="flex justify-start gap-4">
                        <p class="text-xs font-semibold text-green-600 cursor-pointer" @click="editDepartment(item.id)">edit
                        </p>
                        <p class="text-xs font-semibold  text-red-600 cursor-pointer" @click="deleteDepartment(item.id)">
                            delete</p>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <BaseModal :is-open-modal="modal" @cancel="modal = false" @create="createOrUpdateFn(department)">
        <template #modalContent>
            <p class="text-xl text-center font-bold pb-3">{{ isUpdate ? "Bo'limni tahrirlash" : "Bo'lim qo'shish"
            }}</p>
            <BaseInput v-model="department.name" label="Bo'lim nomini kiriting" />
            <BaseInput v-model="department.code" class="mt-2" label="Bo'lim kodini kiriting"
                @keyup.enter="createOrUpdateFn(department)" />
        </template>
    </BaseModal>
</template>