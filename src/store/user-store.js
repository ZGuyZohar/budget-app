import { defineStore } from 'pinia'
import { useStore } from './main.js'
import { userService } from "../services/user-service.js";

export const useUserStore = defineStore('user', {
    state: () => {
        return {
            user: null
        }
    },
    getters: {

    },
    actions: {
        setUser(){
            const store = useStore()
            this.user = userService.getUser()
            store.expensesInfo = this.user.expensesInfo;
            store.budgetInfo = this.user.budgetInfo;
        }
    }
})