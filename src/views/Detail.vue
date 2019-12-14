<template>
    <div class="container">
        <the-navigation/>
        <h1 class="title">Detail</h1>
        <movie-detail-table :movie="movie"/>
    </div>
</template>
<script>

import Axios from 'axios';
import TheNavigation from '../components/TheNavigation.vue';
import MovieDetailTable from '../components/MovieDetailTable.vue';

export default {
  name: 'detail',
  components: {
    TheNavigation,
    MovieDetailTable,
  },
  props: {
    movieId: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      movie: {},
    };
  },
  created() {
    this.loadMovieDetail();
  },
  methods: {
    loadMovieDetail() {
      Axios.get(`http://www.omdbapi.com/?i=${encodeURI(this.movieId)}&apikey=2cb60e68`)
        .then((response) => {
          this.movie = response.data;
        }).catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
