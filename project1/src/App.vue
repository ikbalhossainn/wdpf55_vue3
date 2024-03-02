<script>

</script>

<template>
  <header-item/>
  <div>
    <h1> Hello Dear </h1>
  <h2> {{ msg }}</h2>
  <food-item/>
  </div>
</template>

<script>
  export default {
    data(){
      return{
        msg: "Welcome to my Home "
      }
      
    }
  }
</script>


<style>
  h1{
    color: coral;
    font-weight: bolder;
  }
</style>
