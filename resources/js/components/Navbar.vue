<template>
  <v-app-bar app >
    <v-layout  row wrap justify-end>
      <v-flex shrink>
        <v-btn color="dark" class="nav-item">Logout <v-icon dark>mdi-logout</v-icon></v-btn>
      </v-flex>
    </v-layout>
  </v-app-bar>
</template>

<script>
import { mapGetters } from 'vuex'
import LocaleDropdown from './LocaleDropdown'

export default {
  components: {
    LocaleDropdown
  },

  data: () => ({
    appName: window.config.appName
  }),

  computed: mapGetters({
    user: 'auth/user'
  }),

  methods: {
    async logout () {
      // Log out the user.
      await this.$store.dispatch('auth/logout')

      // Redirect to login.
      this.$router.push({ name: 'login' })
    }
  }
}
</script>

<style scoped>
.nav-bard{
  display:flex;
  align-items:right;
}
</style>
