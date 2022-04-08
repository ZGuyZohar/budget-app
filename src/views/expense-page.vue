<template>
  <h1>Expense Page</h1>
  <section v-if="expensesInfo">
    <p v-for="expense in expensesInfo.daily">
      {{expense.type}} - {{expense.txt}} : {{expense.amount}}
    </p>
  </section>
</template>

<script>
import {useUserStore} from "../store/user-store.js";
import {storeToRefs} from "pinia/dist/pinia.esm-browser.js";
import {onMounted} from "vue";
import {useStore} from "../store/main.js";

export default {
  name: "expense-page",
  setup(){
    const userStore = useUserStore()
    const { user } = storeToRefs(userStore)
    const mainStore = useStore()

    onMounted(() => {
      userStore.setUser()
      console.log(user)
    })

    return { user, mainStore }
  },
  computed: {
    expensesInfo() {
      return this.mainStore.expensesInfo
    }
  }
}
</script>

