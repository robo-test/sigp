import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    movies: [],
  },
  mutations: {
    ADD(state, movie) {
      state.movies.push(movie);
    },
    FETCH_MOVIES(state, movies) {
      state.movies = movies;
    },
  },
  actions: {
    fetchMovies(context, params) {
      axios.get(`http://www.omdbapi.com/?s=${encodeURI(params.query)}&page=${encodeURI(params.page)}&apikey=2cb60e68`)
        .then((response) => {
          if (response.data.Response === 'True') {
            context.commit('FETCH_MOVIES', response.data.Search);
          } else if (response.data.Error !== undefined) {
            alert(response.data.Error);
          } else {
            console.log('error');
          }
        }).catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    getMovies(state) {
      return state.movies;
    },
  },
});
