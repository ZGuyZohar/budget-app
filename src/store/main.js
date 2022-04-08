import { defineStore } from 'pinia'
import {useUserStore} from "./user-store.js";

export const useStore = defineStore('main', {
    state: () => {
        return {
            expensesInfo: null,
            budgetInfo: null
        }
    },
    getters: {
    },
    actions: {

    }
})