<template>
  <div v-show="display">
    <v-container fluid grid-list-xl style="margin-bottom:50px">
      <transition name="fade"
                  mode="out-in">
        <router-view
          :auth="auth"
          :authenticated="authenticated"
        >
        </router-view>
      </transition>
      </v-container>
    <BottomNav />
  </div>
</template>

<script>
import AuthService from './auth/AuthService'
import BottomNav from '@/layout/elements/BottomNav'

const auth = new AuthService()

const { login, logout, authenticated, authNotifier } = auth

export default {
  name: 'app',
  components: { BottomNav },
  data () {
    return {
      auth,
      authenticated,
      display: false
    }
  },
  methods: {
    login,
    logout
  },
  created: function () {

    if (this.authenticated) {
      this.display = true
    }

    authNotifier.on('authChange', authState => {
      this.authenticated = authState.authenticated
      this.display = true
    })
  }
}
</script>

<style>
  * i{ font-family: 'Material Icons'; }

  .fade-enter-active,
  .fade-leave-active {
    transition-duration: 0.3s;
    transition-property: opacity;
    transition-timing-function: ease;
  }

  .fade-enter,
  .fade-leave-active {
    opacity: 0
  }
  
</style>