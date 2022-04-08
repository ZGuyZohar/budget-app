<template>
  <h1>Account Page</h1>
</template>

<script>
import {useUserStore} from "../store/user-store.js";
import {storeToRefs} from "pinia/dist/pinia.esm-browser.js";
import {onMounted} from "vue";

export default {
  name: "account-page",
  setup(){
    const userStore = useUserStore()

    const { user } = storeToRefs(userStore)

    onMounted(() => {
      userStore.setUser()
    })


  }
}
</script>

