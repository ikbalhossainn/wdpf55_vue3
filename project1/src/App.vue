<script></script>

<template>
  <header-item />
  <div class="body">
    <h1>Hello Dear</h1>
    <h2>{{ msg }}</h2>
    <food-item />
    <food-item
      food-name="Apple"
      food-details="Here goes details content about Apple"
    />
    <food-item
      food-name="Mango"
      food-details="Here goes details content about Mango"
    />
    <food-item
      food-name="Orange"
      food-details="Here goes details content about Orange"
    />
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to my Home",
    };
  },
};
</script>

<style>
h1 {
  color: coral;
  font-weight: bolder;
}
.body {
  text-align: center;
}
</style>
