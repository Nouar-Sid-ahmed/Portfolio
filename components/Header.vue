<template>
  <header class="header">
    <img src="../static/logo_alternet.png" alt="Sid-ahmed NOUAR" class="header__icon" />
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

.header__icon {
    /* Appliquez le style que vous souhaitez pour l'icône ici */
    width: 60px;
    height: 50px;
}

.header__nav-list {
  list-style-type: none;
  padding: 0;
  display: flex;
  justify-content: center;
  margin: revert;
}

.header__nav-item {
  margin: 0 30px;
}

.header__nav-item a {
  color: #FFFFFF;
  text-decoration: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 5px;
  transition: background-color 0.3s;
}

.header__nav-item a:hover {
  background-color: rgba(255, 255, 255, 0.2);
}

</style>
