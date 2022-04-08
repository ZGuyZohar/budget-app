<template>
  <header class="nav-header">
    <div class="container mx-auto flex justify-between align-items-center py-3">

    <div class="home">
      <router-link to="/">Home</router-link>
    </div>
    <nav class="routes">
      <router-link to="/expense">Expenses</router-link>
      <router-link to="/budget">Budgets</router-link>
      <router-link to="/collab">Collaborations</router-link>
      <router-link to="/account">Account</router-link>
    </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "nav-header"
}
</script>
