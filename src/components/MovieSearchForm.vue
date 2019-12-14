<template>
  <form action="#" @submit.prevent="getMovies()" class="section">
    <div class="field">
    <label for="movie-input" class="label">{{ $t("message.searching") }}</label>
    <div class="control">
      <input v-model="query" class="input is-small" type="text" id="movie-input" autofocus
             :placeholder="$t('message.movie_name')">
    </div>
    </div>
    <div class="field">
      <div class="control">
        <button class="button is-link is-fullwidth" type="submit">
          <span>{{ $t("message.search") }}</span>
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
    };
  },
  methods: {
    getMovies() {
      this.$store.commit('CHANGE_QUERY', this.query);
      this.$store.dispatch('fetchMovies');
    },
  },
};
</script>

<style scoped lang="stylus">
</style>
