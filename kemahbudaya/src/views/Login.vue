<template>
  <section class="login">
    <div class="container">
      <div class="text-center mt-5">
        <img src="../assets/logo.png" alt />
      </div>
      <div class="mt-5">
        <div class="input-wrapper">
          <p>Email</p>
          <input type="text" placeholder="Masukkan email" />
        </div>
        <div class="input-wrapper">
          <p>Password</p>
          <input type="text" placeholder="Masukkan Password" />
        </div>
      </div>

      <button>Masuk Sekarang</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "Login"
};
</script>

<style>
html {
  height: 100% !important;
}

p {
  margin-bottom: 0 !important;
}

body {
  background: #eff4fc !important;
}

.login button {
  margin-top: 40px;
  background-image: linear-gradient(#88b4fd, #619cfd);
  color: white;
  font-weight: 700;
  font-size: 19px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: none;
  border-bottom: solid 6px #357df4;
}

.login {
  margin: 0 17px;
  font-family: "Nunito";
  font-weight: 700;
}

.login .input-wrapper {
  color: #100f37;
}

.login .input-wrapper p {
  color: #100f37;
  font-size: 19px;
}

.login input {
  margin-top: 10px;
  margin-bottom: 20px;
  width: 100%;
  height: 58px;
  border-radius: 20px;
  border: none;
  padding: 0 25px;
  outline: none;
}
</style>