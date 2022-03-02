
<template>
<div>
   <div>
    THIS IS USERS PAGE
</div> 
<table border="2px">
    <tr v-for="item in list" :key="item.userId">
        <td>{{item.userId}}</td>
         <td>{{item.title}}</td>

    </tr>
</table>
<!-- <div>{{$route.params.name}}</div> -->
<!-- <router-view></router-view> -->
</div>

</template>

<script>
import Vue from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
Vue.use(VueAxios,axios);
export default {
    name: 'UserView',
    data() {
        return {list:undefined}
    },
    created(){
        Vue.axios.get('https://jsonplaceholder.typicode.com/posts').then(repons => {
            // console.log(repons);
             this.list = repons.data;
        });
   
    }
}

</script>

<style>

</style>