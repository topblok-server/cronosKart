<template>
  <v-app>
    <navbar :loggedIn="loggedIn" id="nav"/>
    <v-main>
      <router-view/>
    </v-main>
    <customfooter/>
  </v-app>
</template>

<script>
import navbar from "./components/navbar.vue"
import customfooter from "./components/footer.vue"

export default {
  name: 'App',

  data: () => ({
    loggedIn: false,
  }),


  components: {
    navbar,
    customfooter,
  },
};
</script>

<style scoped>

</style>
