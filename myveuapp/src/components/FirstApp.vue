<template>
    <div>
         <SecondApp />
        <div v-bind:class="getStyel()">mohamedibnahmad</div>
        <div>{{salary}}</div>
        <button v-on:click="inc()">inc</button>
        <button v-on:click="dec()">dec</button>

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
        className : 'f1',
        salary : 12
        
        
    }
},
methods : {
    getStyel(){
        return 'f1'
    },
    // get(){
    //     console.log('don!')
    // }
    inc(){
        return this.salary++
    },
    dec(){
        return this.salary--;
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

