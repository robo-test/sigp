<template>
    <div class="section">
        <ul class="list is-hoverable" v-if="movies.length > 0">
            <movie-list-item v-for="(movie, index) in movies" :key="index" :movie="movie"/>
        </ul>
    </div>
</template>

<script>
import MovieListItem from './MovieListItem.vue';

export default {
  name: 'MovieList',
  components: {
    MovieListItem,
  },
  computed: {
    movies() {
      return this.$store.getters.getMovies;
    },
    moviesCount() {
      return this.$store.getters.getMoviesCount;
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
