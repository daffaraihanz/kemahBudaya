<template>
  <section class="quiz">
    <div class="container">
      
      <!-- <img class="mt-5" src="@/assets/arrowLeft.svg" alt /> -->

      <br>

      <div class="text-center mt-2 question">

        <img v-if="apakah_soal_sudah_habis" src="@/assets/Logo.webp" class="mt-4" width="100%" srcset="">

        <img v-if="result.gb_soal" class="mt-4 img-fluid" :src="result.gb_soal" />

        <h2 class="mt-5 mb-4">
          {{result.soal}}
        </h2>
        
        <div class="button-wrapper">

            <!-- Jawaban 1 -->
            <div v-if="result.jawaban1">
              <button @click="submitJawaban(result.jawaban1)" style="height: 200px; overflow-y: auto" v-if="is_url(result.jawaban1)" class="tombol-login" type="button">
                <img @click="submitJawaban(result.jawaban1)" width="200px" :src="result.jawaban1">
              </button>

              <button v-else @click="submitJawaban(result.jawaban1)" class="tombol-login" type="button">
                <span @click="submitJawaban(result.jawaban1)">{{result.jawaban1}}</span>
              </button>
            </div>

            <!-- Jawaban 2 -->
            <div v-if="result.jawaban2">
              <button @click="submitJawaban(result.jawaban2)" style="height: 200px; overflow-y: auto" v-if="is_url(result.jawaban2)" class="tombol-login" type="button">
                <img @click="submitJawaban(result.jawaban2)" width="200px" :src="result.jawaban2">
              </button>

              <button v-else @click="submitJawaban(result.jawaban2)" class="tombol-login" type="button">
                <span @click="submitJawaban(result.jawaban2)">{{result.jawaban2}}</span>
              </button>
            </div>

            <!-- Jawaban 3 -->
            <div v-if="result.jawaban3">
              <button @click="submitJawaban(result.jawaban3)" style="height: 200px; overflow-y: auto" v-if="is_url(result.jawaban3)" class="tombol-login" type="button">
                <img @click="submitJawaban(result.jawaban3)" width="200px" :src="result.jawaban3">
              </button>

              <button v-else @click="submitJawaban(result.jawaban3)" class="tombol-login" type="button">
                <span @click="submitJawaban(result.jawaban3)">{{result.jawaban3}}</span>
              </button>
            </div>

            <!-- Jawaban 4 -->
            <div v-if="result.jawaban4">
              <button @click="submitJawaban(result.jawaban4)" style="height: 200px; overflow-y: auto" v-if="is_url(result.jawaban4)" class="tombol-login" type="button">
                <img width="200px" :src="result.jawaban4">
              </button>

              <button @click="submitJawaban(result.jawaban4)" v-else class="tombol-login" type="button">
                <span @click="submitJawaban(result.jawaban4)">{{result.jawaban4}}</span>
              </button>
            </div>

        </div>

        <!-- <div class="pagination">
          <div class="paginationWrapper">
            <img src="@/assets/quizArrowLeft.svg" alt />
          </div>
          <p>
            1 /
            <span>10</span>
          </p>
          <div class="paginationWrapper">
            <img src="@/assets/quizArrowRight.svg" alt />
          </div>
        </div> -->

        <br><br>
        <button v-if="!apakah_soal_sudah_habis" @click="getSoalSecaraAcak()" class="soallain" type="button">Soal lainnya</button>
        <button v-if="apakah_soal_sudah_habis" @click="akhiriKuiz()" class="soallain" type="button">Akhiri Kuis</button>

      </div>
    </div>
  </section>
</template>

<script>
//import PrimaryButton from "../components/PrimaryButton";
import c from "@/config.js"
import axios from 'axios'

export default {
  name: "Quiz",
  components: {
    //PrimaryButton
  },
  data: function() {
    return {
      result: {
        gb_soal: null,
        jawaban1: null,
        jawaban2: null,
        jawaban3: null,
        jawaban4: null,
        soal: null,
        id: null,
        is_active: null
      },
      apakah_soal_sudah_habis: false
    };
  },

  methods: {
    akhiriKuiz() {
      if (!confirm("Apakah kamu ingin mengakhiri kuiz?")) {
        console.log("Batal mengakhiri kuis");
        return false;
      }

      const headers = {
          'Authorization': "Bearer " + sessionStorage.getItem("Eduwisata_token")
        }
        
        let loader = this.$loading.show();
        axios.post(c.config.server_host + "/api/user/akhiri-kuiz", [], {
            headers: headers
          })
          .then((response) => {
              var data = response.data
              loader.hide()

              if(data.meta.short_msg == "berhasil_mengakhiri_sesi_kuiz") {
                localStorage.removeItem('kuiz_mbah_serut')

                this.$swal({
                  title: "Berhasil!",
                  text: "Terima kasih telah mengikuti kuiz, sampai jumpa kuis di esok hari",
                  icon: "success"
                });

                this.$router.push("/home");
              } else {
                this.$swal({
                  title: "Error!",
                  text: "Terjadi kesalahan, gagal memulai kuiz",
                  icon: "error"
                });
              }
          })
    },

    submitJawaban(value) {
      console.log(value)

        const headers = {'Authorization': "Bearer " + sessionStorage.getItem("Eduwisata_token")}
        const bodyRequest = {
          id_soal: this.result.id,
          jawaban: value
        }

        let loader = this.$loading.show();
        axios.post(c.config.server_host + "/api/user/submit-jawaban-kuiz", bodyRequest, {
            headers: headers
          })
          .then((response) => {
              var data = response.data
              loader.hide()
              console.log(data);

              if(data.results.apakah_jawaban_benar == true) {
                this.getSoalSecaraAcak()
              } else if (data.results.apakah_jawaban_benar == false) {
                
                this.$swal({
                  title: "Salah!",
                  text: "Maaf jawaban kamu salah",
                  icon: "warning"
                });

                this.getSoalSecaraAcak()
              } else {
                this.getSoalSecaraAcak()
              }
          })

    },
    is_url(str) {
      var pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
      return !!pattern.test(str);
    },

    cekSesiKuiz() {
      if(localStorage.getItem('kuiz_mbah_serut') == '' || localStorage.getItem('kuiz_mbah_serut') == null) {
        this.$swal({
            title: "Error!",
            text: "Tidak ada sesi kuiz aktif sekarang",
            icon: "error"
          });
        window.history.go(-1); return false;
      }

      this.getSoalSecaraAcak()
    },

    getSoalSecaraAcak() {
      const headers = {
        'Authorization': "Bearer " + sessionStorage.getItem("Eduwisata_token")
      }

      let loader = this.$loading.show();
      axios.get(c.config.server_host + "/api/user/get-soal-secara-acak", {
          headers: headers
        })
        .then((response) => {
          var data = response.data
          console.log(data);

          if(data.meta.short_msg == "soal_sudah_habis_segera_akhir_sesi_kuiz") {
            this.apakah_soal_sudah_habis = true
            this.$swal({
              title: "Peringatan!",
              text: "Kamu sudah menjawab semua soal, segera akhiri kuiz",
              icon: "warning"
            });
          }

          loader.hide()
          this.result = data.results
        })
    }
  },

  mounted() {
    this.cekSesiKuiz()
  },
};
</script>

<style scoped>
.paginationWrapper {
  background: #fff;
  text-align: center;
  line-height: 45px;
  width: 52px;
  height: 52px;
  border-radius: 20px;
  border-radius: 20px;
  border: none;
  border-bottom: solid 6px #ddebff;
}

.quiz {
  padding-bottom: 50px;
}
.button-wrapper {
  display: flex;
  flex-direction: column;
}

.button-wrapper button {
  width: 100%;
  margin-top: 0;
  margin-bottom: 20px;
}

.image-wrapper {
  background: linear-gradient(180deg, #ffffff 0%, #eff5ff 100%);
  border: none;
  border-radius: 20px;
  border: none;
  border-bottom: #ddebff;
  border-bottom-style: solid;
  border-bottom-width: 6px;
  height: 167px;
  width: 167px;
  text-align: center;
  line-height: 160px;
}

.image-wrapper img {
  height: 130px;
  width: 130px;
}

.pagination {
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
}

.pagination p {
  margin: 0 20px;
  color: #737295;
  font-size: 18px;
}

button {
  /* margin-top: 40px; */
  margin-bottom: 20px;
  background: white;
  color: #737295;
  font-weight: 700;
  font-size: 17px;
  width: 48%;
  height: 56px;
  border-radius: 20px;
  border: none;
  border-bottom: #ddebff;
  border-bottom-style: solid;
  border-bottom-width: 6px;
}

h2 {
  color: #100f37;
  font-weight: 700;
  font-size: 24px;
}

.tombol-login {
  /* margin-top: 40px; */
  /* background-image: linear-gradient(#88b4fd, #619cfd); */
  color: #737295;
  font-weight: 700;
  font-size: 17px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 6px;
  background-color: #fff;
  border-bottom-color: #DDEBFF;
}


.soallain {
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
  background-color: #83DC9C;
  border-bottom-color: #30B755;
}
</style>