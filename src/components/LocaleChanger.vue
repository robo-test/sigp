<template>
    <div class="LocaleChanger level-item">
        <select v-model="$i18n.locale">
            <option v-for="(lang, i) in langs" :key="`Lang${i}`" :value="lang">{{ lang }}</option>
        </select>
    </div>
</template>

<script>
export default {
  name: 'LocaleChanger',
  data() {
    return {
        langs: ['sk', 'en']
    };
  },
};
</script>
