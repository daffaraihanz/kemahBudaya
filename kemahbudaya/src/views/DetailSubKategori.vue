<template>
  <section class="detailSubKategori">
    <div class="container">
      <img class="mt-5" src="../assets/arrowLeft.svg" alt />
      <div class="mt-4">
        <img class="img-fluid" src="../assets/dummyImage3.png" alt />
        <div class="mt-3 mini-image-wrapper">
          <img src="../assets/dummyImage4.png" alt />
          <img src="../assets/dummyImage4.png" alt />
          <img src="../assets/dummyImage4.png" alt />
        </div>
      </div>
      <div class="mt-5 content">
        <h2>Kucing Jawa</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Turpis vitae gravida dictum maecenas. Sagittis nisi, convallis nulla platea sed integer faucibus. Blandit tortor id eget pellentesque nec. Eu blandit vel at mollis accumsan, quam semper vitae vel. Amet volutpat quis facilisis quam elit. Proin fringilla non elit fringilla cursus. Lobortis neque urna etiam eu. A at faucibus in consectetur sit magna. Nunc nibh lorem in ut tristique amet.
          Tortor quam morbi tincidunt vitae iaculis. Vitae dignissim accumsan vulputate eu cras ullamcorper in. Enim urna morbi amet tincidunt consequat enim pellentesque feugiat. Ornare quis aliquet ipsum, ultrices mi arcu lorem potenti morbi. Mauris, nisl pulvinar ipsum, ut at congue aenean velit.
          Tortor nibh felis in suspendisse cursus faucibus. Mauris hac sit id gravida posuere. Ut semper pulvinar amet nunc non nulla ridiculus massa ante. Placerat amet ullamcorper quis cras turpis in. Convallis duis tincidunt varius tempus et. Dui eget adipiscing ultrices venenatis. Mus dolor, diam et commodo sit gravida facilisi aliquam auctor. Vitae cras ullamcorper in arcu nisi.
        </p>
      </div>
      <div class="d-flex justify-content-end mt-4">
        <div class="indoFlag"></div>
        <div class="englishFlag"></div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "DetailSubKategori"
};
</script>

<style scoped>
.detailSubKategori {
  padding-bottom: 50px;
}

.indoFlag {
  margin-right: 20px;
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