<template>
  <v-card>

    <v-img
            src="https://www.w3schools.com/w3css/img_lights.jpg"
            height="200px"
    >
      <v-container
              fill-height
              fluid
              pa-3
              style="background-color:rgba(0,0,0,0.5);bottom:0;position:absolute"
      >
        <v-layout fill-height>
          <v-flex xs12 align-end flexbox>
            <span class="headline white--text" >This is the initiative title</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-img>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>favorite</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>bookmark</v-icon>
      </v-btn>
      <v-btn icon>
        <v-icon>share</v-icon>
      </v-btn>
      <v-btn icon @click="show = !show">
        <v-icon>{{ show ? 'keyboard_arrow_down' : 'keyboard_arrow_up' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-slide-y-transition>
      <v-card-text v-show="show">
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
      </v-card-text>
    </v-slide-y-transition>
  </v-card>
</template>

<script>
  export default {
    data: () => ({
    show: false
  })
  }
</script>

<style>
  .v-card
  {
    transition:height 1s ease-in-out;
  }
</style>