<script setup>
const emits = defineEmits(['deleteItem', 'editItem'])
const props = defineProps({
  tableBody: {
    type: Array,
    default: [],
  },
});
</script>
<template>
  <div class="w-full border h-auto bg-white rounded-md">
    <div class="grid grid-cols-12 text-center py-1.5">
      <p>ID</p>
      <p class="col-span-2">Ismi</p>
      <p class="col-span-2">Familyasi</p>
      <p>Birthday</p>
      <p class="col-span-2">Email</p>
      <p>Phone</p>
      <p>Mutaxasisligi</p>
      <p class="col-span-2">Harakat</p>
    </div>
    <div class="border-t pt-2">
      <div class="grid grid-cols-12 text-sm text-center py-1" v-for="item, index in props.tableBody" :key="index">
        <p>{{ item.id }}</p>
        <p class="col-span-2">{{ item.fname }}</p>
        <p class="col-span-2">{{ item.sname }}</p>
        <p>{{ item.birthday }}</p>
        <p class="col-span-2">{{ item.email }}</p>
        <p>{{ item.phone }}</p>
        <p>{{ item.job_id }}</p>
        <div class="col-span-2">
          <span @click="$emit('deleteItem', data.id)"
            class="material-icons text-base text-red-500 cursor-pointer">delete</span>
          <span @click="$emit('editItem', data.id)" class="material-icons text-base ml-5 cursor-pointer">edit</span>
        </div>
      </div>
    </div>
  </div>
</template>
