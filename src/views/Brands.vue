<template>
    <div class="container">
        <div id="brands">
            <h1>All Brands</h1>

            <div v-if="loading">
                <img src="../assets/loader.gif" alt="loader" class="loader-img">
            </div>

            <div class="flex">
                <router-link class="child" v-for="(brand,index) in brands" :key="index"
                    :to="{name: 'Brand', params: {name: brand}}">
                    <h2>{{brand}}</h2> 
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
import service from '@/services/service.js';

export default {
    data() {
        return {
            brands: []
        }
    },
    methods: {
        isAbsent(arr,val)
        {
            for( let i=0; i<arr.length; i++ )
                if( arr[i] === val )
                    return false;
            return true;
        },
        async loadBrands() {
            const resp = await service.getAllBrands();
            const unique = [];
            resp.data.forEach( mobile => {
                if( this.isAbsent(unique,mobile.brand) )
                    unique.push(mobile.brand);
            });
            this.brands = unique;
        }
    },
    created () {
        this.loadBrands();
    },
    computed: {
        loading() {
            return this.brands[0] === undefined
        }
    },
}
</script>

<style scoped>

#brands { margin: 100px auto; }

h1
{
    font-size: 45px;
    font-family: "JosefinSans-Bold",sans-serif;
    text-align: center;
    margin-bottom: 50px;
}

.loader-img { height: 500px;  max-width: 100%; }

.flex { justify-content: space-around; }

.child
{
    width: 22%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0px 0px 12px rgb(0, 0, 0,0.1);
    margin: 25px 0;
    cursor: pointer;
    transition: transform 0.3s ease;
}

.child:hover
{
    transform: scale3d(1.05,1.2,1.2);
    box-shadow: 0px 0px 25px rgb(0, 0, 0,0.1);
    background-color: rgb(0, 0, 0,0.015);
}

h2
{
    font-size: 25px;
    font-family: "JosefinSans-Bold",sans-serif;
    color: black;
    text-transform: capitalize;
}

@media (max-width: 1023px)
{
    .child { width: 280px; }
}

</style>