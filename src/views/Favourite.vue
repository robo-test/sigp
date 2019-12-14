<template>
  <div class="container">
    <the-navigation/>
    <h1 class="title">Favourite</h1>
      <div class="section">

      <div class="columns">
        <div v-for="(movie, index) in movies" :key="index" class="card column is-one-third">
          <div class="card-image">
            <figure class="image is-4by3">
              <img :src="movie.Poster" :alt="movie.Title">
            </figure>
          </div>
          <div class="card-content">
            <div class="content">
              <span>{{movie.Title}}</span>
            </div>
          </div>
          <footer class="card-footer">
            <a href="#" class="card-footer-item">Detail</a>
            <a href="#" class="card-footer-item" @click.once="removeItem" :data-id="index">
            Delete
            </a>
          </footer>
        </div>
      </div>
      </div>
  </div>
</template>
<script>

import TheNavigation from '@/components/TheNavigation.vue';

export default {
  name: 'favourite',
  components: {
    TheNavigation,
  },
  data() {
    return {
      movies: [
        {
          Title: '',
          Poster: '',
        },
      ],
    };
  },
  created() {
    if (localStorage.favouriteMovies) {
      this.movies = JSON.parse(localStorage.favouriteMovies);
    }
  },
  methods: {
    removeItem(e) {
      const movieIndex = e.target.getAttribute('data-id');
      this.movies.splice(movieIndex, 1);
      localStorage.favouriteMovies = JSON.stringify(this.movies);
    },
  },
};
</script>
