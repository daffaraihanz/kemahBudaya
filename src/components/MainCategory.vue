<template >
  <div :class="{imagePosition: myListMainCategory.id%2 == 0}" class="main-category">
    <img src="app/assets/dummyImage.png" alt />
    <div class="box"></div>
    <router-link to="/subKategori">
      <button
        :style="[{ backgroundColor: myListMainCategory.id == 1 ? '#84AEFD' : myListMainCategory.id == 2 ? '#79D893' : myListMainCategory.id == 2 ? '#79D893' : myListMainCategory.id == 3 ? '#E9A14C' : myListMainCategory.id == 4 ? '#B083DC' : myListMainCategory.id == 5 ? '#74D3E8' : myListMainCategory.id == 6 ? '#F57373' : '#000000'},{ borderBottomColor: myListMainCategory.id == 1 ? '#357DF4' : myListMainCategory.id == 2 ? '#30B755' : myListMainCategory.id == 3 ? '#E39538' : myListMainCategory.id == 4 ? '#893CD7' : myListMainCategory.id == 5 ? '#27B4D3' : myListMainCategory.id == 6 ? '#D35151' : '#000000'}]"
        :class="{buttonPosition: myListMainCategory.id%2 == 0}"
      >{{ myListMainCategory.title }}</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: "MainCategory",
  props: ["myListMainCategory", "bgcolor"]
  // computed: {
  //   randomColor() {
  //     if (myListMainCategory == 1) {
  //       return "84AEFD";
  //     }
  //   }
  // }
};
</script>

<style scoped>
.box {
  border: solid 18px #306dcf;
  opacity: 30%;
  width: 242px;
  height: 121px;
  margin: auto;
  position: absolute;
  left: 0;
  bottom: 0;
  z-index: -99;
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

.buttonPosition {
  left: 0;
}
</style>