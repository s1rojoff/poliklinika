import { useDashboardStore } from "./store"
import { onMounted, ref } from 'vue'
import { storeToRefs } from "pinia"
export function useDashboardFn() {
    const store = useDashboardStore()
    const { getStatisticDashboard } = store
    const { seriesJob,
        dataJob } = storeToRefs(store)
    onMounted(() => {
        getStatisticDashboard()
    })
    const test = false

    // const seriesJob1 = [{
    //     name: 'Count',
    //     data: dataJob.value,
    // }];
    // const chartOptionsJob = {
    //     chart: {
    //         height: 350,
    //         type: 'bar',
    //     },
    //     plotOptions: {
    //         bar: {
    //             borderRadius: 10,
    //             columnWidth: '50%',
    //         },
    //     },
    //     dataLabels: {
    //         enabled: false,
    //     },
    //     stroke: {
    //         width: 2,
    //     },
    //     grid: {
    //         row: {
    //             colors: ['#fff', '#f2f2f2'],
    //         },
    //     },
    //     xaxis: {
    //         labels: {
    //             rotate: -45,
    //         },
    //         categories: seriesJob.value, // categories
    //         tickPlacement: 'on',
    //     },
    //     fill: {
    //         type: 'gradient',
    //         gradient: {
    //             shade: 'light',
    //             type: 'horizontal',
    //             shadeIntensity: 0.25,
    //             gradientToColors: undefined,
    //             inverseColors: true,
    //             opacityFrom: 0.85,
    //             opacityTo: 0.85,
    //             stops: [50, 0, 100],
    //         },
    //     },
    // };
    return {
        test
    }
}