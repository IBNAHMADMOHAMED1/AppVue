
<template>
<div>
   <div>
    THIS IS PROFILE PAGE
</div> 
<div>{{$route.params.name}}</div>
<div>{{$route.params.price}}$</div>
</div>


</template>

<script>
export default {
    name: 'ProfileView'
}

</script>

<style>

</style>