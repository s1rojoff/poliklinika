<script setup>
const emits = defineEmits(['delete', 'edit'])
const props = defineProps({
    cardInfo: {
        type: Object,
        required: true
    }
})
</script>
<template>
    <div class="bg-white rounded-lg p-3 flex flex-col justify-between">
        <div>
            <div>
                <p class="text-xs text-neutral-500">Ismi</p>
                <p class="text-base"> {{ props.cardInfo.fname }}</p>
            </div>
            <div class="pt-2">
                <p class="text-xs text-neutral-500">Familyasi</p>
                <p class="text-base"> {{ props.cardInfo.sname }}</p>
            </div>
            <div class="pt-2">
                <p class="text-xs text-neutral-500">Tug'ilgan sanasi</p>
                <p class="text-base"> {{ String(props.cardInfo.birthday).substring(0, 10) }}</p>
            </div>
            <div class="pt-2">
                <p class="text-xs text-neutral-500">E-mail</p>
                <p class="text-base"> {{ props.cardInfo.email }}</p>
            </div>
            <div class="pt-2">
                <p class="text-xs text-neutral-500">Telefon raqami</p>
                <p class="text-base"> {{ props.cardInfo.phone }}</p>
            </div>
            <div class="pt-2">
                <p class="text-xs text-neutral-500">Bo'limi</p>
                <p class="text-base"> {{ props.cardInfo.department_name }}</p>
            </div>
            <div class="pt-2">
                <p class="text-xs text-neutral-500">Mutaxasisligi</p>
                <p class="text-base"> {{ props.cardInfo.job_name }}</p>
            </div>
        </div>
        <div class="pt-3">
            <span @click="$emit('delete', props.cardInfo.id)"
                class="material-icons text-base text-red-500 py-0.5  px-5 bg-gray-300 rounded cursor-pointer">delete</span>
            <span @click="$emit('edit', props.cardInfo.id)"
                class="material-icons text-base py-0.5  px-5 bg-gray-300 rounded ml-3 cursor-pointer">edit</span>
        </div>
    </div>
</template>