<template>
  <div class="home">
    <HelloWorld>
      <div class="main" v-for="post in postData" :key="post">
          <div class="card">
            <img :src="post.webformatURL" >
            <div class="text">
              <h1>{{post.tags}}</h1>
            </div>
          </div>
      </div>
    </HelloWorld>
  </div>
</template>

<script>
import HelloWorld from '../components/HelloWorld.vue'
import axios from 'axios';
import { onMounted,ref } from "@vue/runtime-core";
export default {
  name: 'HomeView',
  components: {
    HelloWorld
  },
  setup(){
    const postData = ref("");
    onMounted(()=>{
      axios.get("https://pixabay.com/api/?key=29191395-2f38a13ea78cbea94d140169c&q=yellow+flowers&image_type=photo")
      .then((res) =>(postData.value = res.data.hits));
      console.log(postData);
    });
    return{postData}
  }
}
</script>

<style scoped>
.main{
    width: 95%;
    margin:0 auto;
}
.home{
  display:flex;
  flex-wrap: wrap;
  width: 100%;

}
.card{
  margin: 0 auto;
  display:flex;
  width:90%;
  padding:15px;
  box-shadow: rgba(3, 102, 214, 0.3) 0px 0px 0px 3px;
  margin-top: 20px;
}
img{
  /* height: 40vh; */
  width: 80%;
  margin-left: 4rem;
  margin-right: 5rem;
 }
.text{
  display:flex;
  justify-content: center;
  align-self: center;
}
 
</style>
