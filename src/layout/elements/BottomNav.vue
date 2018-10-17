<template>
  <v-bottom-nav
          :active.sync="bottomNav"
          :value="true"
          color="white"
          fixed
  >
    <v-btn to="/pending"
            color="teal"
            flat
            value="pending"

    >
      <span>Pending</span>
      <v-icon>history</v-icon>
    </v-btn>
    <v-btn
            color="teal"
            flat
            value="create"
            @click="logout"
    >

      <span><v-img
              :src="logo"
              aspect-ratio="1"
      />Create</span>
    </v-btn>
    <v-btn
            to="/active"
            color="teal"
            flat
            value="favorites"
    >
      <span>Active</span>
      <v-icon>favorite</v-icon>
    </v-btn>

  </v-bottom-nav>
</template>

<script>
  import logo from '@/assets/logo.png'
  import AuthService from '@/auth/AuthService'

  const auth = new AuthService()

  const { login, logout, authenticated, authNotifier } = auth

  export default {
    data () {
      return {
        bottomNav: 'pending',
        logo: logo
      }
    },
    methods: {
      logout
    }
  }
</script>