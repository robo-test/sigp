<template>
    <div class="section">
        <ul class="list is-hoverable">
            <movie-list-item v-for="(movie, index) in movies" :key="index" :movie="movie"/>
        </ul>
    </div>
</template>

<script>
import MovieListItem from '@/components/MovieListItem.vue';

export default {
  name: 'MovieList',
  components: {
    MovieListItem,
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
