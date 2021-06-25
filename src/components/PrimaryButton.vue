<template>
  <button type="button"
    v-bind:style="[{ backgroundColor: bgcolor },{ borderBottomColor: bordercolor }, { color: textcolor }]"
  >
  {{ title }}
  </button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["title", "bgcolor", "bordercolor", "textcolor"]
};
</script>

<style scoped>
button {
  /* margin-top: 40px; */
  /* background-image: linear-gradient(#88b4fd, #619cfd); */
  color: white;
  font-weight: 700;
  font-size: 17px;
  width: 100%;
  height: 60px;
  border-radius: 20px;
  border: none;
  border-bottom-style: solid;
  border-bottom-width: 6px;
}
</style>