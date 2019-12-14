<template>
  <div class="container">
    <the-navigation/>
    <h1 class="title">Detail</h1>
    <movie-detail-table :movie="movie"/>
  </div>
</template>
<script>

import TheNavigation from '@/components/TheNavigation.vue';
import MovieDetailTable from '@/components/MovieDetailTable.vue';

export default {
  name: 'detail',
  components: {
    TheNavigation,
    MovieDetailTable,
  },
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>
