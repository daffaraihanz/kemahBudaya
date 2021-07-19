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
      this.cek_desktop_atau_hp()
    },

    methods: {
      cek_desktop_atau_hp() {
        var isMobile = {
            Android: function() {
                return navigator.userAgent.match(/Android/i);
            },
            BlackBerry: function() {
                return navigator.userAgent.match(/BlackBerry/i);
            },
            iOS: function() {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i);
            },
            Opera: function() {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function() {
                return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
            },
            any: function() {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        if( !isMobile.any() && (location.hostname != "localhost" || location.hostname != "127.0.0.1" || location.hostname === "")) {
          this.$router.push('/desktop_not_allowed')
        }

      },

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
