<template>
    <div class="container" id="mobiles">
        <h1>Popular Mobiles</h1>

        <div v-if="loading">
            <img src="../assets/loader.gif" alt="loader" class="loader-img">
        </div>

        <div class="list">
            <ProductCard v-for="(phone,index) in phones" :key="index" :phone="phone"/>
        </div>

    </div>
</template>

<script>
import ProductCard from '@/components/ProductCard.vue';
import { mapState } from 'vuex';

export default {
    components: {
        ProductCard,
    },
    computed: {
        ...mapState(['mobiles']),
        phones(){
            return this.mobiles.slice(0,12);
        },
        loading(){
            return this.phones[0] === undefined
        }
    }
}
</script>

<style scoped>
#mobiles
{
    margin: 100px auto 0;
}

h1
{
    font-size: 45px;
    font-family: "JosefinSans-Bold",sans-serif;
    text-align: center;
    margin-bottom: 75px;
    line-height: 1.5;
}

.list 
{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px 0;
    justify-content: space-around;
}

.loader-img
{
    max-width: 100%;
}

</style>