import Vue from 'vue'
import VueI18n from 'vue-i18n'

Vue.use(VueI18n)

// eslint-disable-next-line import/no-anonymous-default-export
export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state ? store.state.locale : 'fr',
    fallbackLocale: 'en',
    messages: {
      'en': require('~/locales/en.json'),
      'fr': require('~/locales/fr.json')
    }
  })

  app.i18n.path = (link) => {
    if (app.i18n.locale === app.i18n.fallbackLocale) {
      return `/${link}`
    }

    return `/${app.i18n.locale}/${link}`
  }
}
