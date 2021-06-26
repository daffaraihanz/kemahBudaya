<template>
  <div
    style="height: 100vh"
    class="container w-100 d-flex text-center align-items-center justify-content-center"
  >
    <div class="text-center">
      <img src="@/assets/WARNING.png" style="margin-top: -9rem; margin-bottom: -3rem" width="100%" />

      <h3>Oops!</h3>
      <h3>Kamu hanya bisa mengakses aplikasi ini melalui ponsel</h3>

      <br />

      <router-link to="/home">
        <button class="tombol-login" type="button">Kembali</button>
      </router-link>
    </div>
  </div>
</template>


<style scoped>
.tombol-login {
  color: white;
  font-weight: 700;
  font-size: 17px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 6px;
  background-color: #88b4fd;
  border-bottom-color: #357df4;
}
</style>