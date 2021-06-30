<template>
  <section class="detailSubKategori">
    <div class="container">
      <img class="mt-5" @click="backBtn" src="@/assets/arrowLeft.svg" alt />
      <div class="mt-4">
        <img class="img-fluid" :src="gb_sampul" alt />
        <div class="mt-3 mini-image-wrapper">
          <img style="width: 86px; height: 86px" v-if="hewan.gb_sampul" @click="set_sampul_source(hewan.gb_sampul)" v-lazy="hewan.gb_sampul" alt />
          <img style="width: 86px; height: 86px" v-if="hewan.gb_lainnya" @click="set_sampul_source(hewan.gb_lainnya)" v-lazy="hewan.gb_lainnya" alt />
          <!-- <img src="@/assets/dummyImage4.png" alt />
          <img src="@/assets/dummyImage4.png" alt /> -->
        </div>
      </div>
      <div class="mt-5 content">
        <h2>
          {{hewan.nama}}
        </h2>


        <p v-if="deskripsi_b_indo">
          {{hewan.deskripsi_b_indo}}
        </p>

        <p v-if="deskripsi_b_inggris">
          {{hewan.deskripsi_b_inggris}}
        </p>

      </div>


      <iframe v-if="iframe_source" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen :src="iframe_source" width="100%"></iframe>

      <br><br><br>

      <div class="row w-100">
        <div class="col text-center justify-content-center">
            <div class="speakerWrapper">
              <img @click="putarSuara" src="@/assets/speaker.svg" alt />
            </div>
          </div>

          <div class="col text-center justify-content-center">
            <div @click="set_deskripsi_b_indo" class="indoFlag"></div>
          </div>

          <div class="col text-center justify-content-center">
            <div @click="set_deskripsi_b_inggris" class="englishFlag"></div>
          </div>

      </div>

      <!-- <br>

      <PrimaryButton
            class="mt-4"
            title="Aku Sudah Paham, Berikutnya"
            bgcolor="#83DC9C"
            bordercolor="#30B755"
          /> -->

    </div>
  </section>
</template>

<script>

//import PrimaryButton from "../components/PrimaryButton";
import c from "@/config.js"
import axios from 'axios'

export default {
  components: {
    // PrimaryButton
  },
  name: "DetailSubKategori",
  data() {
    return {
      hewan: {},
      deskripsi_b_indo: true,
      deskripsi_b_inggris: false,
      iframe_source: false,
      gb_sampul: null
    }
  },

  mounted() {
    this.getData()
  },

  methods: {
    putarSuara() {

      var url_api_tts_indo = "http://api.voicerss.org/?key=dc26c41dd12f46cabad6ebc20a435902&r=-3&hl=id-id&c=OGG&src="
      var url_api_tts_inggris = "http://api.voicerss.org/?key=dc26c41dd12f46cabad6ebc20a435902&r=-3&hl=en-us&v=Amy&c=OGG&src="
      var audio;
      let loader = this.$loading.show();

      if(this.deskripsi_b_indo) {
       audio  = new Audio(url_api_tts_indo + encodeURI(this.hewan.deskripsi_b_indo) )
        console.log("Putar suara B Indo");
      }

      if(this.deskripsi_b_inggris) {
        audio = new Audio(this.audioNarasi = url_api_tts_inggris + encodeURI(this.hewan.deskripsi_b_inggris) )
        console.log("Putar suara B Inggris");
      }

      loader.hide()
      audio.play();
    },
    set_deskripsi_b_inggris() {
      this.deskripsi_b_indo = false
      this.deskripsi_b_inggris = true
    },
    set_deskripsi_b_indo() {
      this.deskripsi_b_indo = true
      this.deskripsi_b_inggris = false
    },
    backBtn() {
      window.history.go(-1); return false;
    },
    set_sampul_source(link_gambar) {
      this.gb_sampul = link_gambar
    },
    getData() {
      const AuthStr = 'Bearer ' + sessionStorage.getItem('Eduwisata_token');
      let loader = this.$loading.show();
      axios.get(c.config.server_host + "/api/user/get-data-by-slug/" + this.$route.params.slug, {
          headers: {
            Authorization: AuthStr
          }
        }).then(response => {
          var data = (response.data.results)
          console.log(data);
          this.hewan = data

          this.set_sampul_source(data.gb_sampul)
          
          if(data.link_youtube) {
            var url = new URL(data.link_youtube);
            var v = url.searchParams.get("v");
            console.log(v);

            this.iframe_source = "https://www.youtube.com/embed/" + v
          }

          loader.hide()
        })
        .catch((error) => {
          loader.hide()
          this.$swal({
            title: 'Error!',
            text: "Terjadi kesalahan, silahkan refresh halaman",
            icon: 'error',
          });
          console.error(error);
        });
    
    },
  },

};
</script>

<style scoped>
.speakerWrapper {
  width: 66px;
  height: 66px;
  border-radius: 20px;
  background: linear-gradient(180deg, #ffffff 0%, #eff5ff 100%);
  text-align: center;
  line-height: 60px;
  border-radius: 20px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 6px;
  background-color: #88b4fd;
  border-bottom-color: #ddebff;
}

.detailSubKategori {
  padding-bottom: 50px;
}

.indoFlag {
  /* margin-right: 20px; */
  width: 66px;
  border-bottom: #d8d2e1 solid 6px;
  height: 66px;
  background-image: url("../assets/indoFlag.png");
  border-radius: 20px;
  background-repeat: no-repeat;
}

.englishFlag {
  background-repeat: no-repeat;
  width: 66px;
  height: 66px;
  background-size: cover;
  border-bottom: #0d1a38 solid 6px;
  background-image: url("../assets/englishFlag.png");
  border-radius: 20px;
}

.mini-image-wrapper img {
  margin-right: 20px;
}

h2 {
  color: #100f37;
  font-weight: 700;
  font-size: 24px;
}

.content p {
  margin-top: 10px;
  line-height: 28px;
  color: #737295;
  font-size: 17px;
}
</style>