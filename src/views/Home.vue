<template>
  <section class="home">
    <div class="container">
      <div class="greeting mt-4">
        <h2>Halo</h2>
        <h2>Daffa Raihan Z</h2>
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

export default {
  name: "Home",
  components: { MainCategory },
  methods: {},
  data: function() {
    return {
      list: [
        {
          id: 1,
          title: "Taman Reptil"
        },
        {
          id: 2,
          title: "Kebun Bibit"
        },
        {
          id: 3,
          title: "Edukasi Pertanian"
        },
        {
          id: 4,
          title: "Demplot"
        },
        {
          id: 5,
          title: "Omah Budaya"
        },
        {
          id: 6,
          title: "Panembahan"
        }
      ]
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
