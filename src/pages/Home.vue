<template>
  <v-layout row wrap>
    <Auth :auth="auth" :authenticated="authenticated"/>
    <v-flex v-if="displayLeftColumn" d-flex sm4 xs0 md3>
      Column
      </v-flex>
    <v-flex xs12 sm8 md6 >
      <v-flex v-for="i in 10">
        <Card />
      </v-flex>
    </v-flex>
    <v-flex v-if="displayRightColumn" d-flex sm0 xs0 md2>
      Column
    </v-flex>
  </v-layout>


</template>

<script>
  import Auth from '@/components/Auth'
  import Card from '@/components/Card.vue'
  export default {
    components: {Auth,Card},
    name: 'home',
    props: ['auth', 'authenticated'],
    computed: {
      displayLeftColumn () {
        return this.$vuetify.breakpoint.smAndUp
      },
      displayRightColumn () {
        return this.$vuetify.breakpoint.mdAndUp
      }
    }
  }
</script>

<style>
  a {
    cursor: pointer;
  }
</style>

