<script setup>
const props = defineProps({
    btnText:{
        type: String,
        default: 'create'
    }
})
</script>

<template>
  <button class="bg-[#1e293b] py-1.5 text-sm px-10 text-sm text-white rounded-lg">{{ props.btnText }}</button>
</template>
