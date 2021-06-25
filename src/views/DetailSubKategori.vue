<template>
  <section class="detailSubKategori">
    <div class="container">
      <img class="mt-5" src="@/assets/arrowLeft.svg" alt />
      <div class="mt-4">
        <img class="img-fluid" src="@/assets/dummyImage3.png" alt />
        <div class="mt-3 mini-image-wrapper">
          <img src="@/assets/dummyImage4.png" alt />
          <img src="@/assets/dummyImage4.png" alt />
          <img src="@/assets/dummyImage4.png" alt />
        </div>
      </div>
      <div class="mt-5 content">
        <h2>Kucing Jawa</h2>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi numquam beatae dolor alias natus. Optio ipsa nostrum itaque accusamus cumque?</p>
      </div>
      <div class="d-flex mt-4 justify-content-between">
        <div class="speakerWrapper">
          <img src="@/assets/speaker.svg" alt />
        </div>
        <div class="d-flex">
          <div class="indoFlag"></div>
          <div class="englishFlag"></div>
        </div>
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