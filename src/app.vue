<script setup lang="ts">
import './styles/main.scss'
import NavHeader from "./components/nav-header.vue";



</script>

<template>
  <nav-header />
  <main class="container mx-auto">
    <router-view />
  </main>
</template>

