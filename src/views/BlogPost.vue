<template>
  <div >
        <form @submit.prevent="getData()">
            <input type="text" placeholder="firstname" v-model="firstname">
            <input type="text" placeholder="lastname" v-model="lastname">
            <input type="password" placeholder="password" v-model="password">
            <button type="submit">Submit here</button>
        </form>
  </div>
</template>

<script>
export default {
    emits:['AddData'],
    data(){
        return{
            information:[],
            firstname:'',
            lastname:'',
            password:'',
        }
    },
    methods:{
        getData(){
            let data = {first:this.firstname,last:this.lastname,password:this.password}
            this.information = data
            this.$emit('AddData',this.information)
            console.log(this.information);
        }
    }
}
</script>

<style>

</style>