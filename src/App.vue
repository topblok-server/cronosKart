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
import VueCookies from 'vue-cookies'

export default {
  name: 'App',

  data: () => ({
    loggedIn: false,
  }),
  methods:{
    checkLogin(){
      var isCookie = $cookies.isKey('loginToken')
      if(isCookie == true) {
        this.loggedIn = true;
      }
      else{
        this.loggedIn = false;
      }
    },
  },
  mounted(){
    this.checkLogin()
  },

  components: {
    navbar,
    customfooter,
  },
};
</script>

<style scoped>

</style>
