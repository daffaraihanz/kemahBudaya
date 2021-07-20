<template >
  <div :class="{imagePosition: myListMainCategory.id%2 == 0}" class="main-category">
    <!-- <img v-if="myListMainCategory.icon_url == null" src="@/assets/dummyImage.png" alt /> -->
    <!-- <img v-else v-lazy="myListMainCategory.icon_url" width="220px" height="220px" alt /> -->
    <img width="220px" height="220px" :src="myListMainCategory.image" alt />
    <div class="box">
      <div
        :class="{numberPositionRight: myListMainCategory.id%2 == 1,numberPositionLeft: myListMainCategory.id%2 == 0 }"
        class="numberWrapper"
      >
        <p>{{myListMainCategory.id }}</p>
      </div>
    </div>
    <router-link :to="'/subKategori/' + myListMainCategory.id">
      <button
        @click="setJudulSubKategori(myListMainCategory.title)"
        :style="[{ backgroundColor: myListMainCategory.id == 1 ? '#84AEFD' : myListMainCategory.id == 2 ? '#79D893' : myListMainCategory.id == 2 ? '#79D893' : myListMainCategory.id == 3 ? '#E9A14C' : myListMainCategory.id == 4 ? '#B083DC' : myListMainCategory.id == 5 ? '#74D3E8' : myListMainCategory.id == 6 ? '#F57373' : '#83DC9C'},{ borderBottomColor: myListMainCategory.id == 1 ? '#357DF4' : myListMainCategory.id == 2 ? '#30B755' : myListMainCategory.id == 3 ? '#E39538' : myListMainCategory.id == 4 ? '#893CD7' : myListMainCategory.id == 5 ? '#27B4D3' : myListMainCategory.id == 6 ? '#D35151' : '#30B755'}]"
        :class="{buttonPosition: myListMainCategory.id%2 == 0}"
      >{{ myListMainCategory.title }}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainCategory",
  props: ["myListMainCategory", "bgcolor"],

  data: function() {
    return {};
  },
  computed: {},

  methods: {
    setJudulSubKategori(judul) {
      sessionStorage.removeItem("judulSubKategori");
      sessionStorage.setItem("judulSubKategori", judul);
    }
  }
};
</script>

<style scoped>
.numberWrapper p {
  color: #a2c1ee;
  font-size: 24px;
  font-weight: 800;
}

.numberWrapper {
  position: absolute;
  background: #e1edfe;
  width: 56px;
  border-radius: 200px;
  height: 56px;
  text-align: center;
  line-height: 56px;
  z-index: 999;
}
.box {
  border: solid 18px #e1edfe;
  width: 242px;
  height: 121px;
  margin: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -1;
  border-radius: 40px;
  right: 0;
  position: absolute;
}

button {
  position: absolute;
  right: 0;
  bottom: -10px;
  /* margin-top: -20px; */
  /* background-color: #88b4fd; */
  color: white;
  font-weight: 700;
  font-size: 17px;
  width: 220px;
  height: 60px;
  border-radius: 20px;
  border: none;
  border-bottom: solid 6px #357df4;
}

.main-category {
  margin-bottom: 20px;
  position: relative;
  /* border: solid red 2px; */
}

img {
  border: solid white 15px;
  border-radius: 35px;
}

.imagePosition {
  text-align: right;
}

.numberPositionRight {
  right: -35px;
  top: -35px;
}

.numberPositionLeft {
  left: -35px;
  top: -35px;
}

.buttonPosition {
  left: 0;
}
</style>