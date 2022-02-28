<template>
    <div>
         <SecondApp />
        <div v-bind:class="getStyel()">mohamedibnahmad</div>
        <h2>{{msg}}</h2>
        <p>{{nom}}</p>

       
    </div>
   
</template>

<script>
export default {
    name: 'FirstApp',
   props: {
  msg: String,

},
data(){
    return {
        
        nom : 'mohamed',
        className : 'f1'
        
    }
},
methods : {
    getStyel(){
        return 'f1'
    }
}


}
        
    

</script>

<style>
h1 {
    color : red ;
    font-size: 2rem;
}
.f1{
    color:bisque;
    font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
    font-size: 4rem;
}
</style>

