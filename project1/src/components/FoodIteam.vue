<template>
    <div class="box">
        <h1>{{ message }}</h1>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                message: "How beautiful you are!"
            }
        }
    }
</script>

<style>
    .box{
        height: 200px;
        width: 400px;
        background-color: aqua;
    }

</style>