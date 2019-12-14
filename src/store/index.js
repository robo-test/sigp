import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    query: '',
    currentPage: 1,
    movies: [],
    moviesCount: 0,
    moviesPerPage: 10,
  },
  mutations: {
    ADD(state, movie) {
      state.movies.push(movie);
    },
    FETCH_MOVIES(state, movies) {
      state.movies = movies;
    },
    FETCH_RESULT_COUNT(state, count) {
      state.moviesCount = count;
    },
    CHANGE_PAGE(state, page) {
      state.currentPage = page;
    },
    CHANGE_QUERY(state, query) {
      state.query = query;
    },
  },
  actions: {
    fetchMovies({ commit, state }) {
      axios.get(`http://www.omdbapi.com/?s=${encodeURI(state.query)}&page=${encodeURI(state.currentPage)}&apikey=2cb60e68`)
        .then((response) => {
          if (response.data.Response === 'True') {
            commit('FETCH_MOVIES', response.data.Search);
            commit('FETCH_RESULT_COUNT', response.data.totalResults);
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
    getMoviesCount(state) {
      return state.moviesCount;
    },
    getMoviesPageCount(state) {
      return state.moviesCount > state.moviesPerPage
        ? Math.round(state.moviesCount / state.moviesPerPage)
        : 0;
    },
    getCurrentPage(state) {
      return state.currentPage;
    },
  },
});
