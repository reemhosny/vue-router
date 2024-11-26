<script setup>
import sourceData from '@/data.json';
</script>

<template>
  <div id="nav">
    <router-link id="logo" to="/">Vue School Travel App</router-link>
    <router-link
      v-for="destination in sourceData.destinations"
      :key="destination.id"
      :to="{
        name: 'destination.show',
        params: { id: destination.id, slug: destination.slug },
      }"
    >
      <h2>{{ destination.name }}</h2>
    </router-link>
  </div>
</template>

<style scoped></style>
