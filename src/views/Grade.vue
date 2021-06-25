<template>
  <section class="grade">
    <div class="container">
      <img class="mt-5" src="../assets/arrowLeft.svg" alt />
      <div class="score-wrapper mt-4 mb-5">
        <img src="../assets/star.png" alt />
        <img src="../assets/starcenter.png" alt />
        <img src="../assets/star.png" alt />
        <div class="d-flex align-items-center justify-content-center mt-4">
          <img src="../assets/ic_time.svg" alt />
          <h2>5m 10d</h2>
        </div>
        <div class="total-wrapper mt-4">
          <h2>Total Skor</h2>
          <h1>90</h1>
        </div>
      </div>
      <PrimaryButton bordercolor="#30B755" bgcolor="#83DC9C" title="Coba Kuis Lagi" />
      <PrimaryButton
        class="mt-4"
        bordercolor="#DDEBFF"
        bgcolor="#fff"
        title="Keluar"
        textcolor="#737295"
      />
    </div>
  </section>
</template>

<script>
import PrimaryButton from "../components/PrimaryButton";
export default {
  name: "Grade",
  components: { PrimaryButton }
};
</script>

<style scoped>
h1 {
  font-weight: 800;
  font-size: 64px;
  margin-top: 10px;
}
.total-wrapper {
  background: linear-gradient(180deg, #f6f9ff 0%, #eff5ff 100%);
  padding: 14px 0;
  border-radius: 20px;
  border: none;
  border-top: solid 6px #ddebff;
}

.grade {
}
h2 {
  margin: 0 0 0 10px;
  font-size: 24px;
  font-weight: 600;
  color: #737295;
}
.score-wrapper {
  background: white;
  padding: 40px;
  text-align: center;
  border-radius: 20px;
}
.score-wrapper img:nth-child(2) {
  margin: 0 20px;
}
</style>