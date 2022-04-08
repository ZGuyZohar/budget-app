<template>
  <h1>Home Page</h1>

</template>

<script>
import { useUserStore } from "../store/user-store.js";
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'
export default {

  computed: {

  },
  // START USING TAILWIND YOU ARE REPEATING YOURSELF!
  setup(){
    const userStore = useUserStore()

    const { user } = storeToRefs(userStore)

    onMounted(() => {
      userStore.setUser()
    })
  }
}
</script>

<style scoped>

</style>