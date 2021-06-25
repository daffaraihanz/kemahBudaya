<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },

    mounted() {
      this.cek_koneksi_internet()
    },

    methods: {
      cek_koneksi_internet() {
         if(!navigator.onLine){
            this.$router.push('/no-connection')
          }
      }
    },
  }
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
