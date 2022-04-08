<template>
  <h1>Budget Page</h1>
  <section v-if="budgetInfo">
    <p>Your monthly budget is: {{budgetInfo.total}}</p>
    <div>
      <card v-for="budget in budgetInfo.budgets">
        For type: {{budget.type}}
        The amount you want to spend is {{budget.amount}}
        and the amount you've spent so far is: {{totalSpent(budget.type)}}
      </card>
    </div>
  </section>
</template>

<script>
import {useUserStore} from "../store/user-store.js";
import {useStore} from "../store/main.js";
import {storeToRefs} from "pinia/dist/pinia.esm-browser.js";
import {onMounted} from "vue";

export default {
  name: "budget-page",
  setup(){
    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)
    const mainStore = useStore()

    onMounted(() => {
      userStore.setUser()
    })

    return { user, mainStore }
  },
  computed: {
    budgetInfo() {
      return this.mainStore.budgetInfo
    },
    totalSpent() {
      return (type) => {
        const budget = this.budgetInfo.budgets.find(budget => budget.type === type)
        const total = budget.linkedExpenses.reduce((acc, expense) => {
          return acc + expense.amount
        }, 0)
        return total
      }
    }
  }
}
</script>

