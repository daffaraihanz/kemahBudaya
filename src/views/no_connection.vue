<template>
    <div style="height: 100vh" class="container w-100 d-flex text-center align-items-start justify-content-center">
        <div class="text-center">
            <img src="@/assets/no_internet.png" width="100%">

            <br>
            

            <h3>Oops!</h3>
            <h3>Tidak ada koneksi internet</h3>

            <br><br>

            <button @click="refresh()" class="tombol-login" type="button">Segarkan</button>

            <br>
        </div>
    </div>
</template>

<script>
  export default {
    data() {
      return {
        
      }
    },

    methods: {
      refresh() {
         if(navigator.onLine){
            this.$swal({
              title: 'Yeay!',
              text: "Akhirnya dapet koneksi internet lagi!",
              icon: 'success',
            }); 

            this.$router.push('/home')
          } else {
              location.reload();
          }
      }
    },
  }
</script>


<style scoped>
.tombol-login {
  /* margin-top: 40px; */
  /* background-image: linear-gradient(#88b4fd, #619cfd); */
  color: white;
  font-weight: 700;
  font-size: 17px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 6px;
  background-color: #88B4FD;
  border-bottom-color: #357DF4;
}
</style>