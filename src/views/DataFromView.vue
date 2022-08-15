<template>
<div class="contact">
    <FormView @AddData="getObject"></FormView>
    <DisplayCard></DisplayCard>
</div>
</template>

<script>
import FormView from './BlogPost.vue'
import DisplayCard from '../components/DisplayCard.vue'
export default {
    components:{FormView,DisplayCard},
    data(){
        return{
            datalist:[]
        }
    },
    methods:{
        getObject(data){
            this.datalist.push(data)
            console.log(this.datalist);
        }
    },
    provide(){
        return {
            item:this.datalist
        }
    }
}
</script>

<style>

</style>