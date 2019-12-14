<template>
  <nav v-if="pageCount" class="pagination is-centered" role="navigation" aria-label="pagination">
    <a class="pagination-previous" @click="handleClick(currentPage - 1)">
      {{ $t("message.previous")}}
    </a>
    <a class="pagination-next" @click="handleClick(currentPage + 1)">
      {{ $t("message.next_page")}}
    </a>
    <ul class="pagination-list">
      <li @click="handleClick(1)"><a class="pagination-link is-current">{{1}}</a></li>
      <li v-if="enoughResults"><span class="pagination-ellipsis">&hellip;</span></li>
      <li v-if="enoughResults" @click="handleClick(mediumPage - 1)">
        <a class="pagination-link">{{ mediumPage - 1}}</a>
      </li>
      <li v-if="enoughResults" @click="handleClick(mediumPage)">
        <a class="pagination-link" aria-current="page">{{mediumPage}}</a>
      </li>
      <li v-if="enoughResults" @click="handleClick(mediumPage + 1)">
        <a class="pagination-link">{{mediumPage + 1}}</a>
      </li>
      <li v-if="enoughResults"><span class="pagination-ellipsis">&hellip;</span></li>
      <li><a class="pagination-link" @click="handleClick(pageCount)">{{pageCount}}</a></li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Pagination',
  data() {
    return {
      minPages: 10,
    };
  },
  computed: {
    pageCount() {
      return this.$store.getters.getMoviesPageCount;
    },
    enoughResults() {
      return this.minPages <= this.pageCount;
    },
    mediumPage() {
      return Math.round(this.pageCount / 2);
    },
    currentPage() {
      return this.$store.getters.getCurrentPage;
    },
  },
  methods: {
    handleClick(page) {
      this.actualPage = page;
      if (page !== this.currentPage) {
        this.$store.commit('CHANGE_PAGE', page);
        this.$store.dispatch('fetchMovies');
      }
    },
  },
};
</script>
