<template>
    <div>
        <SecondApp />
        <div v-bind:class="getStyel()">{{ nom }}</div>
        <button v-on:click="change()">change name</button>
        <!-- <div>{{salary}}</div> -->
        <!-- <button v-on:click="inc()">inc</button>
        <button v-on:click="dec()">dec</button>
        <button v-on:keyup.ctrl="click()">enter</button>
        <input type="text"  v-model="salary">
        <button v-on:click="getslary()">confirm</button>
        <h2>{{msg}}</h2>
        <p>{{nom}}</p>
        <input type="checkbox" checked="verif" v-model="verif">
        <label >{{verif}}</label>-->
        <!-- <br>
        <select v-model="selected">
        <option disabled value="">Choisissez</option>
                <option>A</option>
                <option>B</option>
                <option>C</option>
        </select>-->
        <!-- <span>Sélectionné : {{ selected }}</span>
        <input type="text" v-model="caractere">
       <div v-show="v==true">oki</div> 
       <div v-if="caractere=='A'"> Hello A </div>
       <div v-else-if="caractere=='B'"> Hello B </div>
        <div v-else-if="caractere=='c'"> Hello c </div>
        <div v-else> Hello D </div>
        <ul  v-for="item in country" :key="item.id">
            <template  v-if="item.id<=1">
                  <li>{{item.name}}</li>
            <li>{{item.id}}</li>
        </template>-->

        <!-- </ul>
        <ul>
            <li v-for="item in op" :key="item.id">{{item}}</li>
        </ul>-->
    </div>
</template>

<script>
export default {
    name: 'FirstApp',
    props: {
        msg: String,

    },
    data() {
        return {

            nom: 'mohamed ibnahmad',
            className: 'f1',
            salary: 12,
            verif: false,
            selected: '',
            v: false,
            caractere: 'B',
            country: [{ id: 1, name: 'usa' }, { id: 2, name: 'france' }, { id: 3, name: 'Uk' },],
            op: { name: 'dolar', id: 12 }


        }
    },
    methods: {
        getStyel() {
            return 'f1'
        },
        // get(){
        //     console.log('don!')
        // }
        inc() {
            return this.salary++
        },
        dec() {
            return this.salary--;
        },
        click() {
            alert('don!');

        },
        getslary() {
            console.log(this.salary)
        },
        change() {
            this.nom = 'mohamed'
        }


    },


    beforeCreate() {
        alert("beforeCreate1")
    },
    created() {
        alert('afert don!')
    },

    beforeUpdate() {
        alert("beforeCreate hi")
    },
    updated() {
        alert("updated")
    }



}



</script>

<style>
h1 {
    color: red;
    font-size: 2rem;
}
.f1 {
    color: rebeccapurple;
    font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
    font-size: 4rem;
}
</style>

