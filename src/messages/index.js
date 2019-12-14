import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

const messages = {
  sk: {
    message: {
      searching: 'Vyhľadávanie',
      search: 'Vyhľadat',
      movie_name: 'Nazov filmu',
      home: 'Domov',
      favourite: 'Oblubene',
      delete: 'Zmazat',
      property: 'Typ',
      value: 'Hodnota',
      next_page: 'Nasledujuca strana',
      previous: 'Predchadzajuca',
    },
  },
  en: {
    message: {
      searching: 'Search',
      search: 'Search',
      movie_name: 'Movie title',
      home: 'Home',
      favourite: 'Favourite',
      delete: 'Delete',
      property: 'Property',
      value: 'Value',
      next_page: 'Next page',
      previous: 'Previous',
    },
  },
};

const i18n = new VueI18n({
  locale: 'sk',
  messages,
});

export default i18n;
