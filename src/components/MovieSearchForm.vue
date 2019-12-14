<template>
  <form action="#" @submit.prevent="getMovies()" class="section">
    <div class="field">
    <label for="movie-input" class="label">Vyhľadávanie:</label>
    <div class="control">
      <input v-model="query" class="input is-small" type="text" id="movie-input" autofocus
             placeholder="Movie title ...">
    </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link is-fullw" type="submit">
          <span>Vyhľadaj</span>
<!--          <span class="icon is-small">-->
<!--            <i class="fas fa-save"></i>-->
<!--          </span>-->
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  name: 'MovieSearchForm',
  data() {
    return {
      query: '',
      page: 1,
    };
  },
  methods: {
    getMovies() {
      this.$store.dispatch('fetchMovies', { query: this.query, page: this.page });
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
