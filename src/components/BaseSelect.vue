<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: []
  },
  label: {
    type: String,
    defailt: ''
  }
}) 
</script>

<template>
  <div>
    <p class="text-sm w-full">{{ props.label }}</p>
    <select class="border rounded-md w-full py-1 px-1.5 outline-none mt-0.5"
      @change="$emit('input', $event.target.value)">
      <option disabled selected value="test" class="py-2">Select item</option>
      <option class="py-2" v-for="item in props.data" :key="item.id" :value="item.id">
        {{ item.name }}
      </option>
    </select>
  </div>
</template>
