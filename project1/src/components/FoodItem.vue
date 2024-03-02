<template>
    <div class="box" v-on:click="foodclick">
        <h1>{{ message }}</h1>
        <h2>{{ foodName }}</h2>
        <p>{{ foodDetails }}</p>
        <span> {{ clicks }} times click</span>

    </div>
</template>

<script>
    export default{
        data(){
            return{
                message: "How beautiful you are!",
                clicks: 0
            }
        },
    
    props: [
        'foodName',
        'foodDetails'
    ],
    methods:{
        foodclick(){
            this.clicks++
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