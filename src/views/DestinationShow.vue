<script setup>
import sourceData from '../data.json';
import { useRoute } from 'vue-router';
import { computed } from 'vue';

const route = useRoute();

const destinationID = computed(() => {
  return parseInt(route.params.id);
});

const destination = computed(() => {
  return sourceData.destinations.find(
    (destination) => destination.id === destinationID.value
  );
});
</script>
<template>
  <section class="destination">
    <h1>{{ destination.name }}</h1>
    <div class="destination-details">
      <img :src="`/images/${destination.image}`" :alt="destination.name" />
      <p>{{ destination.description }}</p>
    </div>
  </section>
</template>
