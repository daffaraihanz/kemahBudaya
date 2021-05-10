<template>
  <button
    v-bind:style="[{ backgroundColor: bgcolor },{ borderBottomColor: bordercolor }]"
  >{{ title }}</button>
</template>

<script>
export default {
  name: "PrimaryButton",
  props: ["title", "bgcolor", "bordercolor", "fak"]
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
</style>