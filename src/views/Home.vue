<template>
  <div class="container">
  <the-navigation/>
  <h1 class="title">{{ $t("message.searching") }}</h1>
  <movie-search-form/>
  <movie-list/>
  <pagination/>
  </div>
</template>

<script>

import MovieSearchForm from '@/components/MovieSearchForm.vue';
import MovieList from '@/components/MovieList.vue';
import TheNavigation from '@/components/TheNavigation.vue';
import Pagination from '@/components/Pagination.vue';

export default {
  name: 'home',
  components: {
    MovieSearchForm,
    MovieList,
    TheNavigation,
    Pagination,
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
