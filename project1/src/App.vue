<script></script>

<template>
  <header-item />

  <div>
    <h1> We will show some dynamic component here </h1>
    <button @click="myComponent='birds-comp'">Birds</button>
    <button @click="myComponent='flowers-comp'">Flowers</button>
  </div>

  <div>
      <component :is="myComponent"> Will show here </component>
  </div>
</template>

<script>
export default {
  data() {
    return {
      msg: "Welcome to my Home",
      myComponent:''
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
