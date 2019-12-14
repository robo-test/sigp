<template>
  <nav class="navbar container level" role="navigation">
    <div class="navbar-brand  level-left">
      <router-link to="/" class="navbar-item">{{ $t("message.home") }}</router-link>
      <router-link to="/favourite" class="navbar-item">{{ $t("message.favourite") }}</router-link>
    </div>
    <locale-changer class="level-right"/>
  </nav>
</template>

<script>
import LocaleChanger from './LocaleChanger.vue';

export default {
  name: 'TheNavigation',
  components: {
    LocaleChanger,
  },
};
</script>

<style scoped lang="stylus">
</style>
