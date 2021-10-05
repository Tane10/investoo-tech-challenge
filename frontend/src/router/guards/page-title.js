import isFunction from 'lodash-es/isFunction'
import store from '@/store'

export default function updatePageTitle(to, from, next) {
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find(r => r.meta && r.meta.title)

  if (nearestWithTitle) {
    document.title = isFunction(nearestWithTitle.meta.title)
      ? `IG - ${nearestWithTitle.meta.title(to)}`
      : `IG - ${nearestWithTitle.meta.title}`
  }

  store.dispatch('general/handleNewRoute', to)

  next()
}
