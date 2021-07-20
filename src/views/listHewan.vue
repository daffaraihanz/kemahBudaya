<template>
  <section class="subKategori">
    <div class="container">
      <img class="mt-5" @click="backBtn" src="@/assets/arrowLeft.svg" alt />

      <div>
        <h4 class="mt-4 mb-4">Ayo lihat semua yang ada disini</h4>

        <div v-for="myListSubKategori in list" :key="myListSubKategori.id" class="card-wrapper">
          <router-link :to="'/detailSubKategori/' + myListSubKategori.slug">
            <div class="d-flex align-items-center cardWrapper">
              <img v-lazy="myListSubKategori.gb_sampul" style="width: 86px; height: 86px" alt />
              <div class="textWrapper">
                <h5
                  :style="{color: '#' + myColor(myListSubKategori.id)}"
                >{{ myListSubKategori.nama }}</h5>
              </div>
            </div>
          </router-link>
        </div>

        <br />
        <br />
        <button @click="mulaiKuiz()" class="tombol-login" type="button">Mulai Kuis</button>
      </div>
    </div>
  </section>
</template>

<script>
//import PrimaryButton from "../components/PrimaryButton";
import c from "@/config.js";
import axios from "axios";

export default {
  name: "List Hewan",
  //components: { PrimaryButton },
  data: function() {
    return {
      list: []
    };
  },

  mounted() {
    this.getData();
  },

  methods: {
    mulaiKuiz() {
      if (confirm("Apakah kamu ingin memulai kuiz?")) {
        const headers = {
          Authorization: "Bearer " + sessionStorage.getItem("Eduwisata_token")
        };

        let loader = this.$loading.show();
        axios
          .post(c.config.server_host + "/api/user/mulai-kuiz", [], {
            headers: headers
          })
          .then(response => {
            var data = response.data;
            loader.hide();

            if (
              data.meta.short_msg ==
              "gagal_memulai_kuiz_baru_karena_sudah_mengerjakan_kuiz_hari_ini"
            ) {
              this.$swal({
                title: "Peringatan!",
                text: data.meta.message,
                icon: "warning"
              });

              return false;
            }

            if (data.meta.short_msg == "berhasil_memulai_sesi_kuiz") {
              localStorage.setItem(
                "kuiz_mbah_serut",
                "Kuiz started at " + data.results.mulai_pada
              );
              this.$router.push("/Quiz");
            } else if (
              data.meta.short_msg ==
              "gagal_memulai_kuiz_baru_karena_masih_ada_kuiz_yang_belum_selesai_hari_ini"
            ) {
              localStorage.setItem("kuiz_mbah_serut", "Kuiz started at now");
              this.$router.push("/Quiz");
            } else {
              this.$swal({
                title: "Error!",
                text: "Terjadi kesalahan, gagal memulai kuiz",
                icon: "error"
              });
            }
          });
      }
    },
    backBtn() {
      window.history.go(-1);
      return false;
    },
    getData() {
      const AuthStr = "Bearer " + sessionStorage.getItem("Eduwisata_token");
      let loader = this.$loading.show();
      axios
        .get(
          c.config.server_host +
            "/api/user/get-data-by-kategori-turunan/" +
            this.$route.params.id,
          {
            headers: {
              Authorization: AuthStr
            }
          }
        )
        .then(response => {
          var data = response.data.results;
          console.log(data);
          this.list = data;
          loader.hide();
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
    },

    myColor(id) {
      if (id == 1 || (id - 1) % 6 == 0) {
        return "88B4FD";
      } else if (id == 1 || (id - 2) % 6 == 0) {
        return "75D690";
      } else if (id == 1 || (id - 3) % 6 == 0) {
        return "FEBC6F";
      } else if (id == 1 || (id - 4) % 6 == 0) {
        return "AE7FDC";
      } else if (id == 1 || (id - 5) % 6 == 0) {
        return "73D3E8";
      } else if (id == 1 || (id - 6) % 6 == 0) {
        return "F37070";
      } else {
        return "F37070";
      }
      // return Math.floor(Math.random() * 16777215).toString(16);
    }
  }
};
</script>

<style scoped>
.cardWrapper {
  margin-bottom: 15px;
}

.textWrapper {
  margin-left: -10px;
  background: #fff;
  width: 100%;
  padding: 20px 0 20px 30px;
  z-index: -99;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

.subKategori {
  padding-bottom: 100px;
}

.card-wrapper:hover .card {
  filter: brightness(90%);
}

.card-wrapper img {
  border: solid white 8px;
  border-radius: 20px;
}

.card-wrapper {
  /* margin-top: 20px;
  border: solid 2px red;
  display: flex;
  align-items: center; */
}

h5 {
  margin: 0;
  font-weight: 700;
  font-size: 16px;
}

.subKategori .card h5 {
  line-height: 64px;
}

.subKategori .card {
  margin-left: -7px;
  padding-left: 30px;
  z-index: -99;
  width: 100%;
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  border: none;
  height: 64px;
}

.title h2:nth-child(1) {
  color: #737295;
  font-family: "Montserrat";
  font-size: 24px;
}

.title h2:nth-child(2) {
  color: #100f37;
  font-weight: 700;
  font-size: 24px;
}

h4 {
  color: #737295;
  font-family: "Montserrat";
  font-size: 18px;
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
  background-color: #83dc9c;
  border-bottom-color: #30b755;
}
</style>