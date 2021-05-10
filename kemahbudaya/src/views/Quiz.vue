<template>
  <section class="quiz">
    <div class="container">
      <img class="mt-5" src="../assets/arrowLeft.svg" alt />
      <div class="text-center question">
        <img class="mt-4" src="../assets/dummyImage3.png" alt />
        <h2 class="mt-4">Hewan apakah diatas ?</h2>
        <button>Kucing</button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "Quiz"
};
</script>

<style scoped>
button {
  margin-top: 40px;
  /* background-image: linear-gradient(#88b4fd, #619cfd); */
  color: white;
  font-weight: 700;
  font-size: 19px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 6px;
}

h2 {
  color: #100f37;
  font-weight: 700;
  font-size: 24px;
}
</style>