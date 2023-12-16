<script setup>
import { computed } from 'vue'
import BaseChart from "../../components/BaseChart.vue";
import { useDashboardStore } from "./store"
import { storeToRefs } from "pinia"
import { useDashboardFn } from './composable';
const store = useDashboardStore()
const { seriesJob,
    dataJob,
    seriesDep,
    dataDep } = storeToRefs(store)
const { test } = useDashboardFn()

</script>
<template>
    <p v-if="false">{{ test }}</p>
    <main class="p-5 w-full">
        <h1 class="text-xl font-semibold text-center">Dashboard</h1>

        <div class="h-[90vh] overflow-y-scroll scrollbarActive pb-5 mt-5">
            <p>Bo'lim xodimlari uchun statistika</p>
            <BaseChart v-if="seriesDep.length > 0 && dataDep.length > 0" :series="seriesDep" :data="dataDep" />
            <p>Xodimlar mutaxasisliklari bo'yicha statistika</p>
            <BaseChart v-if="seriesJob.length > 0 && dataJob.length > 0" :series="seriesJob" :data="dataJob" />
        </div>
    </main>
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