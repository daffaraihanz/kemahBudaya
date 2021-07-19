<template>
  <section class="home">
    <div class="container">
      <div class="greeting mt-4">
        <h2>Halo</h2>
        <h2>{{name}}</h2>
      </div>
      <div>
        <h4 class="mt-4">Mari berwisata di tempat ini</h4>
        <div v-for="myListMainCategory in list" :key="myListMainCategory.id" class="row">
          <div class="col-lg-12">
            <MainCategory bgcolor="#000" :myListMainCategory="myListMainCategory" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import MainCategory from "../components/MainCategory";
import c from "@/config.js";
import axios from "axios";

export default {
  name: "Home",
  components: { MainCategory },
  methods: {
    getKategoriUtama() {
      const AuthStr = "Bearer " + sessionStorage.getItem("Eduwisata_token");
      let loader = this.$loading.show();
      axios
        .get(c.config.server_host + "/api/user/kategori-utama", {
          headers: {
            Authorization: AuthStr
          }
        })
        .then(response => {
          var data = response.data.results;
          console.log(data);
          // this.list = data;
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
    }
  },
  mounted() {
    this.getKategoriUtama();
    this.name = sessionStorage.getItem("Eduwisata_user_name");
  },
  data: function() {
    return {
      name: null,
      list: [
        {
          id: 1,
          title: "Taman Reptil",
          image: "img/TAMANREPTILE.e7a17fb8.svg"
        },
        {
          id: 2,
          title: "Kebun Bibit",
          image: "img/KEBUNBIBIT.e87db4c0.svg"
        },
        {
          id: 3,
          title: "Demplot",
          image: "img/DEMPLOT.5de57575.svg"
        },
        {
          id: 4,
          title: "Omah Budaya",
          image: "img/OMAHBUDAYA.a30ec04d.svg"
        },
        {
          id: 5,
          title: "Salur",
          image: "img/SALUR.c7fe42b1.svg"
        },
        {
          id: 6,
          title: "Panembahan",
          image: "img/PANEMBAHAN.2e8c569e.svg"
        },
        {
          id: 7,
          title: "Padepokan",
          image: "img/EBEG.531dd4a1.svg"
        }
      ]
      // list: []
    };
  }
};
</script>

<style scoped>
.home {
  padding-bottom: 100px;
}

.greeting h2:nth-child(1) {
  color: #737295;
  font-family: "Montserrat";
  font-size: 24px;
}

.greeting h2:nth-child(2) {
  color: #100f37;
  font-weight: 700;
  font-size: 24px;
}

.home h4 {
  color: #737295;
  font-family: "Montserrat";
  font-size: 18px;
}
</style>
