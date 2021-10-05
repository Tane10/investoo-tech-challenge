import isFunction from 'lodash-es/isFunction'
import router from '@/router'

const setPageTitle = function setPageTitle(route) {
  if (!route || !route.name) return
  const title = isFunction(route.meta.title) ? route.meta.title(route) : route.meta.title
  return title.split(' ').reduce((string, word, index) => {
    if (index === 0) return word
    const joinChar = word.length > 4 ? '\n' : ' '
    return `${string}${joinChar}${word}`
  }, '')
}

export default {
  namespaced: true,
  state: {
    routes: [],
  },
  mutations: {
    storeRoute(state, to) {
      state.routes.push(to)
    },
    popFromState(state) {
      state.routes.pop()
      router.push(state.routes[state.routes.length - 1])
    },
  },
  actions: {
    handleNewRoute({ commit, getters }, to) {
      if (getters.currentRoute && getters.currentRoute.name === to.name) return
      commit('storeRoute', to)
    },
  },
  getters: {
    previousRoute: state => state.routes.length > 1 && state.routes[state.routes.length - 2],
    previousRouteName: (state, { previousRoute }) => setPageTitle(previousRoute),
    currentRoute: state => state.routes.length && state.routes[state.routes.length - 1],
    currentRouteName: (state, { currentRoute }) => setPageTitle(currentRoute),
  },
}
