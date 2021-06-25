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

      <button @click="login()" class="tombol-login" type="button">Masuk Sekarang</button>
    </div>

    <br />
  </section>
</template>

<script>
import c from "@/config.js";
import axios from "axios";

export default {
  name: "Login",
  data() {
    return {
      email: "",
      password: ""
    };
  },
  mounted() {
    this.cekSesi();
  },
  methods: {
    cekSesi() {
      if (
        sessionStorage.getItem("Eduwisata_token") &&
        sessionStorage.getItem("Eduwisata_user_name") &&
        sessionStorage.getItem("Eduwisata_user_role")
      ) {
        this.$router.push("/home");
      }
    },

    login() {
      var postBody = {
        username: this.email,
        password: this.password
      };

      let loader = this.$loading.show();

      axios
        .post(c.config.server_host + "/api/login", postBody)
        .then(response => {
          var data = response.data;
          loader.hide();

          if (data.meta.short_msg == "username_atau_password_salah") {
            this.$swal({
              title: "Error!",
              text: data.meta.message,
              icon: "error"
            });
          } else {
            this.$swal({
              title: "Berhasil!",
              text: "Berhasil login!",
              icon: "success"
            });

            sessionStorage.setItem(
              "Eduwisata_token",
              data.results.access_token
            );
            sessionStorage.setItem("Eduwisata_user_name", data.results.name);
            sessionStorage.setItem("Eduwisata_user_role", data.results.role);
          }

          this.$router.push("/home");
        })
        .catch(error => {
          loader.hide();
          this.$swal({
            title: "Error!",
            text: "Terjadi kesalahan, silahkan refresh halaman",
            icon: "error"
          });
          console.error(error);
        });
    }
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
  background-color: #88b4fd;
  border-bottom-color: #357df4;
}
</style>