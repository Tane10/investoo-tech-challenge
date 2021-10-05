<template>
  <v-app>
    <template>
      <navigation-drawer />
      <v-app-bar color="grey lighten-5" app elevate-on-scroll>
        <v-toolbar-title class="d-flex justify-center">
          <div class="headline font-weight-bold align-self-center">{{ currentRouteName }}</div>
        </v-toolbar-title>
        <v-spacer />

        <v-tooltip v-if="currentRoute && currentRoute.meta.info" max-width="200" bottom>
          <template #activator="{ on }">
            <v-icon class="mr-4" v-on="on">info</v-icon>
          </template>
          <span>{{ currentRoute.meta.info }}</span>
        </v-tooltip>
      </v-app-bar>
    </template>

    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import { version } from '@/../package.json'

import NavigationDrawer from '@/components/navigation-drawer'

export default {
  name: 'App',
  components: {
    NavigationDrawer,
  },
  data: () => ({
    pageTitle: '',
    appVersion: version,
  }),
  computed: {
    ...mapGetters('general', ['currentRoute', 'currentRouteName']),
  },
}
</script>
