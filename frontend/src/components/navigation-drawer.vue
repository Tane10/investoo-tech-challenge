`<template>
  <v-navigation-drawer color="accent" app permanent dark>
    <div class="nav__logo">
      <v-list class="py-0" color="accent" height="64" width="100%" dense>
        <v-list-item class="d-flex justify-center nav__logo-inner" :to="{ path: '/' }">
          <v-img
            alt="Investoo Group"
            class="shrink my-2"
            height="45"
            src="@/assets/logos/investoo.svg"
            title="Investoo Group"
            transition="scale-transition"
            width="150"
            contain
          />
        </v-list-item>
      </v-list>
      <v-divider />
    </div>
    <v-list class="d-flex flex-column flex-grow-1 nav__menu pt-0" color="accent" dense>
      <template v-for="(item, index) in menuItems">
        <template v-if="item.subtitle">
          <v-divider v-if="index !== 0" :key="`group-divider-${index}`" />
          <v-subheader :key="`subtitle-${index}`">
            {{ item.subtitle }}
          </v-subheader>
        </template>

        <v-divider v-else-if="item.divider" :key="`divider-${index}`" class="mt-2" />

        <v-list-group
          v-else-if="item.children"
          :key="`group-${index}`"
          :prepend-icon="item.icon"
          :value="hasActiveItem(item)"
          no-action
        >
          <template #activator>
            <v-list-item-title v-text="item.name" />
          </template>
          <v-list-item
            v-for="(child, childIndex) in item.children"
            :key="`child-${index}-${childIndex}`"
            :to="child.to"
            color="primary"
            link
            ripple
          >
            <v-list-item-content>
              <v-list-item-title v-text="child.name" />
            </v-list-item-content>
          </v-list-item>
        </v-list-group>

        <v-list-item v-else :key="`item-${index}`" :to="item.to" color="primary" link ripple>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.name }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </template>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  data() {
    return {
      menuItems: [
        {
          subtitle: 'Tools',
          resource: 'offers',
        },
        {
          id: 'table-preview',
          name: 'Table Preview',
          icon: 'line_weight',
          resource: 'offers',
          to: { name: 'tools.table-preview' },
        },
      ],
    }
  },
  methods: {
    hasActiveItem(item) {
      return item.children.some(child => child.to.name === this.$route.name)
    },
  },
}
</script>

<style lang="scss" scoped>
.nav {
  &__logo {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
  }

  &__logo-inner {
    height: 100%;
  }

  &__menu {
    margin-top: 64px;
  }
}
</style>
