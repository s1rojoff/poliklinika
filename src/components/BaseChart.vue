<script setup>
import apexchart from 'vue3-apexcharts';
import { toRefs } from 'vue'
const props = defineProps({
    series: {
        type: Array,
        required: true
    },
    data: {
        type: Array,
        required: true
    },
})
const series = [{
    name: 'Count',
    data: props.data,
}];

const chartOptions = {
    chart: {
        height: 350,
        type: 'bar',
    },
    plotOptions: {
        bar: {
            borderRadius: 10,
            columnWidth: '50%',
        },
    },
    dataLabels: {
        enabled: false,
    },
    stroke: {
        width: 2,
    },
    grid: {
        row: {
            colors: ['#fff', '#f2f2f2'],
        },
    },
    xaxis: {
        labels: {
            rotate: -45,
        },
        categories: props.series, // categories
        tickPlacement: 'on',
    },
    fill: {
        type: 'gradient',
        gradient: {
            shade: 'light',
            type: 'horizontal',
            shadeIntensity: 0.25,
            gradientToColors: undefined,
            inverseColors: true,
            opacityFrom: 0.85,
            opacityTo: 0.85,
            stops: [50, 0, 100],
        },
    },
};
toRefs(props)
</script>
<template>
    <div id="chart">
        <apexchart type="bar" height="350" :options="chartOptions" :series="series"></apexchart>
    </div>
</template>