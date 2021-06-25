<template>
  <section class="subKategori">
    <div class="container">
      <img class="mt-5" src="appassets/arrowLeft.svg" alt />
      <div class="title mt-4">
        <h2>Sekarang kamu lagi di,</h2>
        <h2>Taman Reptil</h2>
      </div>
      <div>
        <h4 class="mt-4">Ayo lihat semua hewan yang ada</h4>
        <router-link to="/detailSubKategori">
          <div v-for="myListSubKategori in list" :key="myListSubKategori.id" class="card-wrapper">
            <img src="appassets/dummyImage2.png" alt />
            <div class="card item rotate">
              <h5
                :style="{color: '#' + myColor(myListSubKategori.id)}"
              >{{ myListSubKategori.title }}</h5>
            </div>
          </div>
        </router-link>
        <router-link to="/quiz">
          <PrimaryButton
            class="mt-5"
            title="Mulai Kuis Sekarang"
            bgcolor="#83DC9C"
            bordercolor="#30B755"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "appcomponents/PrimaryButton";

export default {
  name: "SubKategori",
  components: { PrimaryButton },
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
  },
  methods: {
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
      }
      // return Math.floor(Math.random() * 16777215).toString(16);
    }
  }
};
</script>

<style scoped>
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
  margin-top: 20px;
  /* border: solid 2px red; */
  display: flex;
  align-items: center;
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
</style>