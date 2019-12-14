<template>
    <table class="table is-bordered is-striped is-fullwidth">
        <thead>
            <tr>
                <th>Property</th>
                <th>Value</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(value, name, index) in movie" :key="index">
                <th>
                <span>{{name}}</span>
                    <span v-if="name === 'Title'" class="icon fa-star"
                    @click="addToFavourites"></span>
                </th>
                <th>{{value}}</th>
            </tr>
        </tbody>
    </table>
</template>
<script>

export default {
  name: 'MovieDetailTable',
  props: {
    movie: {
      type: Object,
      required: true,
    },
  },
  methods: {
    addToFavourites() {
      if (localStorage.favouriteMovies) {
        const favouriteMovies = JSON.parse(localStorage.favouriteMovies);
        const alreadyExists = favouriteMovies.filter(({ imdbID }) => imdbID === this.movie.imdbID);
        if (alreadyExists.length === 0) {
          favouriteMovies.push(this.movie);
          localStorage.favouriteMovies = JSON.stringify(favouriteMovies);
        }
      } else {
        localStorage.favouriteMovies = JSON.stringify([this.movie]);
      }
    },
  },
};
</script>
