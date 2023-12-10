<script setup>
const emits = defineEmits(['deleteItem', 'editItem'])
const props = defineProps({
    cardInfo: {
        type: Object,
        default: [],
    },
});
</script>
<template>
    <div class="bg-white p-3 w-full rounded-md flex flex-col justify-between">
        <div>
            <p class="text-sm text-neutral-500">Nomi</p>
            <p class="text-base"> {{ cardInfo.name }}</p>
        </div>
        <div class="pt-3">
            <span @click="$emit('deleteItem', cardInfo.id)"
                class="material-icons text-base text-red-500 py-0.5  px-5 bg-gray-300 rounded cursor-pointer">delete</span>
            <span @click="$emit('editItem', cardInfo.id)"
                class="material-icons text-base py-0.5  px-5 bg-gray-300 rounded ml-3 cursor-pointer">edit</span>
        </div>
    </div>
</template>