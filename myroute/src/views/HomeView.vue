<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <div>home page</div>
   <div>
     <p>Iphone 13 </p>
     <p>100$</p>
     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias, repudiandae possimus est, sit ipsa voluptas architecto aliquid voluptatem enim esse quis tempore ad obcaecati facere, maxime ex sed laborum illo.</p>
    <button v-on:click="profile()">More</button>

   </div>
   
  </div>
</template>

<script>
// @ is an alias to /src
import router from '../router'


export default {
  name: 'HomeView',
  components: {
    
  },
  methods: {
    profile(){
      router.push({name: 'ProfileView',params:{name:'iphone 13',price:300}})

    }
  }
}
</script>
