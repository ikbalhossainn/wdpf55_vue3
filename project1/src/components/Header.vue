<template>
    <div class="header">
        <h1>{{ msg }}</h1>
    </div>
</template>

<script>
    export default{
        data(){
            return{
                msg: "This is a Header"
            }
        }
    }

</script>

<style>
    .header{
        width: 100%;
        height: 300px;
        background-color: darkkhaki;
    }
</style>