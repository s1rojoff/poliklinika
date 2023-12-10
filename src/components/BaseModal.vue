<script setup>
import BaseButton from "./BaseButton.vue";
const emits = defineEmits(['cancel', 'create'])
const props = defineProps({
  isOpenModal: {
    type: Boolean,
    required: true
  },
})
</script>
<template>
  <div v-if="isOpenModal" class="fixed h-screen w-screen flex">
    <div class="bg-black/40 h-full  w-2/3"></div>
    <div class="bg-white fixed w-1/3 p-4 h-screen right-0 top-0">
      <slot name="modalContent"></slot>
      <div class="absolute bottom-5 right-4">
        <BaseButton @click="$emit('cancel')" class="mr-5" btn-text="Bekor qilish" />
        <BaseButton @click="$emit('create')" btn-text="Yaratish" />
      </div>
    </div>
  </div>
  <!-- <div  class="flex relative justify-between absolute">
    
    
  </div> -->
</template>
