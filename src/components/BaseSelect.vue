<script setup lang="ts">
import { PropType, ref } from 'vue';
const emit = defineEmits(['selected']);
const props = defineProps({
  options: {
    type: Array as PropType<{ id: number; name: string }[]>,
    requiered: true,
  },
  label: {
    type: String,
    default: "name",
  },
});
const selectedItem = ref<string>('Tanlang');
const isOpen = ref<boolean>(false);
const handleClickedItem = (item: any) => {
  isOpen.value = false;
  emit('selected', item.id);
  selectedItem.value = item.name;
};
</script>
<template>
  <div>
    <p class="text-sm w-full pb-0.5">{{ props.label }}</p>
    <div class="relative">
      <div class="w-full border rounded-lg bg-white flex items-center justify-between pr-3 cursor-pointer"
        @click="isOpen = !isOpen">
        <p class="text-base font-normal py-1 px-[10px]">
          {{ selectedItem }}
        </p>
        <p class="rotate-90">></p>
      </div>
      <div v-if="isOpen"
        class="mt-2 rounded-lg bg-white border absolute w-full z-50 h-[20vh] overflow-y-scroll scrollbarActive">
        <p class="text-base rounded-lg hover:bg-stone-200 transition-all cursor-pointer font-normal py-1 px-[10px]"
          v-for="(item, index) in props.options" :key="index" @click="handleClickedItem(item)">
          {{ item.name }}
        </p>
      </div>
    </div>
  </div>
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
