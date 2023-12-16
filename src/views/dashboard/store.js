import { defineStore } from 'pinia'
import axios from 'axios'
const baseUrl = import.meta.env.VITE_APP_URL
export const useDashboardStore = defineStore('dashboard', {
    state: () => {
        return {
            seriesJob: [],
            dataJob: [],
            seriesDep: [],
            dataDep: []
        }
    },
    actions: {
        async getStatisticDashboard() {
            await axios.get(`${baseUrl}api/statistic`).then(res => {
                this.dashboardResult = res.data
                this.dataDep = res.data[0].count
                this.seriesDep = res.data[0].name
                this.dataJob = res.data[1].count
                this.seriesJob = res.data[1].name
                return res
            }).catch(err => {
                return err
            })
        }
    }
})