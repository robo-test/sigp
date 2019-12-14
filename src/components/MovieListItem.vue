<template>
  <li class="list-item">
    <router-link :to="{name: 'detail', params: {movie: movie}}">{{movie.Title}}</router-link>
  </li>
</template>

<script>
export default {
  name: 'MovieListItem',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style scoped lang="stylus">

</style>
