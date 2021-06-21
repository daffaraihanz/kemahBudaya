<template>
  <section class="quiz">
    <div class="container">
      <img class="mt-5" src="../assets/arrowLeft.svg" alt />
      <div class="text-center question">
        <img class="mt-4 img-fluid" src="../assets/dummyImage3.png" alt />
        <h2 class="mt-5 mb-4">Hewan apakah diatas ?</h2>
        <template v-if="test == 1">
          <div class="d-flex justify-content-between">
            <button>Kucing</button>
            <button>Kucing</button>
          </div>
          <div class="d-flex justify-content-between">
            <button>Kucing</button>
            <button>Kucing</button>
          </div>
        </template>
        <template v-else-if="test == 2">
          <div class="button-wrapper">
            <PrimaryButton bordercolor="#DDEBFF" bgcolor="#fff" title="Kucing Jawa" />
            <PrimaryButton bordercolor="#DDEBFF" bgcolor="#fff" title="Kucing Jawa" />
            <PrimaryButton bordercolor="#DDEBFF" bgcolor="#fff" title="Kucing Jawa" />
            <PrimaryButton bordercolor="#DDEBFF" bgcolor="#fff" title="Kucing Jawa" />
          </div>
        </template>
        <template v-else>
          <div class="d-flex justify-content-between">
            <div class="image-wrapper">
              <img src="../assets/dummyImage5.png" alt />
            </div>
            <div class="image-wrapper">
              <img src="../assets/dummyImage5.png" alt />
            </div>
          </div>
          <div class="d-flex justify-content-between mt-3">
            <div class="image-wrapper">
              <img src="../assets/dummyImage5.png" alt />
            </div>
            <div class="image-wrapper">
              <img src="../assets/dummyImage5.png" alt />
            </div>
          </div>
        </template>
        <div class="pagination">
          <img src="../assets/quizArrowLeft.svg" alt />
          <p>
            1 /
            <span>10</span>
          </p>
          <img src="../assets/quizArrowRight.svg" alt />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import PrimaryButton from "../components/PrimaryButton";

export default {
  name: "Quiz",
  components: {
    PrimaryButton
  },
  data: function() {
    return {
      test: 2
    };
  }
};
</script>

<style scoped>
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
</style>