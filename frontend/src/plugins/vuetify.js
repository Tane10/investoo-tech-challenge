import Vue from 'vue'
import Vuetify, { VCard, VList } from 'vuetify/lib'

Vue.use(Vuetify, {
  components: {
    VCard,
    VList,
  },
})

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#169C78',
        secondary: '#373737',
        accent: '#2E3A48',
      },
    },
  },
  icons: {
    iconfont: 'md',
    values: {
      data: 'show_chart',
      deals: 'request_quote',
      paid_landers: 'request_page',
      links: 'account_tree',
      offers: 'portrait',
      partners: 'person',
      traffic: 'traffic',
      performance: 'analytics',
      users: 'supervisor_account',
    },
  },
})
