<script setup>
import Home from '../src/views/Home.vue';
</script>

<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/brazil">Brazil</router-link>
  </div>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped></style>
