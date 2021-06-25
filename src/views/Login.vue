<template>
  <section class="login">
    <div class="container">
      <div class="text-center mt-5">
        <img src="@/assets/logo.png" alt />
      </div>
      <div class="mt-5 mb-4">
        <div class="input-wrapper">
          <p>Email</p>
          <input type="text" v-model="email" placeholder="Masukkan email" />
        </div>
        <div class="input-wrapper">
          <p>Password</p>
          <input type="text" v-model="password" placeholder="Masukkan Password" />
        </div>
      </div>

      <router-link to="/home">
        <PrimaryButton
          @click="login()"
          title="Masuk Sekarang"
          bgcolor="#88B4FD"
          bordercolor="#357DF4"
        />
      </router-link>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "../components/PrimaryButton";

export default {
  name: "Login",
  components: { PrimaryButton },
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    login() {}
  }
};
</script>

<style scoped>
p {
  margin-bottom: 0 !important;
}

.login {
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