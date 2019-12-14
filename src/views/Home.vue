<template>
  <div class="container">
  <the-navigation/>
  <h1 class="title">Search</h1>
    <movie-search-form/>
    <movie-list :movies="movies"/>
  </div>
</template>

<script>

import MovieSearchForm from '@/components/MovieSearchForm.vue';
import MovieList from '@/components/MovieList.vue';
import TheNavigation from '@/components/TheNavigation.vue';

export default {
  name: 'home',
  components: {
    MovieSearchForm,
    MovieList,
    TheNavigation,
  },
  data() {
    return {
      movies: [
        {
          title: '',
        },
      ],
    };
  },
};
</script>
