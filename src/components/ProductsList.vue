<template>
    <div id="products-list" class="container">
        <h1> {{ this.brandName }} </h1>

        <div class="list">
            <ProductCard v-for="(phone,index) in phones" :key="index" :phone="phone" class="product-card"/>
        </div>
    </div>
</template>

<script>
import service from "@/services/service.js";
import ProductCard from '@/components/ProductCard.vue';

export default {
    components: {
        ProductCard,
    },
    data() {
        return {
            phones: []
        }
    },
    props: {
        brandName: {
            type: String,
            required: true 
        },
    },
    methods: {
        async getMobiles() {
            const resp = await service.getMobilesbyBrand(this.brandName);
            this.phones = resp.data;
            this.$store.dispatch('pushMobiles',resp.data);
        }
    },
    created () {
        this.getMobiles();
    }
}
</script>

<style scoped>

#products-list { margin: 50px auto; }

h1
{
    font-size: 48px;
    font-family: "JosefinSans-Bold",sans-serif;
    margin-bottom: 50px;
    text-transform: capitalize;
}

.list 
{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    justify-content: space-between;
}

@media( max-width: 1023px )
{
    h1 { text-align: center; }

    .list { justify-content: space-evenly; }
}

</style>