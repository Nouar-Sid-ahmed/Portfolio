<template>
  <header class="header">
    <h1 class="header__title">Sid-ahmed NOUAR</h1>
    <nav class="header__nav">
      <ul class="header__nav-list">
        <li class="header__nav-item"><nuxt-link to="/">{{$t('home')}}</nuxt-link></li>
        <li class="header__nav-item"><nuxt-link to="/about">{{$t('about')}}</nuxt-link></li>
        <li class="header__nav-item"><nuxt-link to="/services">{{$t('services')}}</nuxt-link></li>
        <li class="header__nav-item"><nuxt-link to="/portfolio">{{$t('portfolio')}}</nuxt-link></li>
        <li class="header__nav-item"><nuxt-link to="/contact">{{$t('contact')}}</nuxt-link></li>
      </ul>
    </nav>
    <LanguageSwitcher />
  </header>
</template>

<script>
import LanguageSwitcher from './LanguageSwitcher.vue';

export default {
  components: {
    LanguageSwitcher
  }
}
</script>

<style scoped>
.header {
    background-color: #000080; /* Bleu */
    color: #FFFFFF; /* Blanc */
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.header__title {
    margin: 0;
}

.header__nav-list {
    list-style-type: none;
    padding: 0;
    display: flex;
    gap: 20px;
}

.header__nav-item a {
    color: #FFFFFF; /* Blanc */
    text-decoration: none;
}

.header__nav-item a:hover {
    text-decoration: underline;
}

</style>
