<template>
    <router-link class="card"
        :to="{ name: 'Product', params: { id: phone.img_url } }">
        <img :src="phone.img_url" alt="" v-if="phone.img_url" >
        <h4> {{ phone.brand }}  {{ phone.model }} </h4>
        <h4> ₹ {{ formatMoney(Math.floor(phone.approx_price_EUR * 87.93)) }} </h4>
    </router-link>
</template>

<script>
export default {
    props: {
        phone: {
            type: Object,
            required: true
        },
    },
    methods: {
        formatMoney(num) {
            var str = '' ;
            num = String(num);
            for( let i=num.length-1; 0<=i; i-- )
            {
                str = num[i] + str;
                if( i === num.length - 3  && i !== 0 )
                    str = ',' + str;
                if( i === num.length - 5 && i !== 0 )
                    str = ',' + str;
            }
            return str;
        }
    }
}
</script>

<style scoped>

.card
{
    width: 250px;
    box-shadow: 0px 0px 12px rgb(0, 0, 0,0.1);
    margin: 0 25px 50px;
    padding: 25px;
    transition: transform 0.3s ease;
}

.list .card:nth-child(4n+1) { margin-left: 0; }

.card img { height: 250px; display: block; margin: auto; }

.card h4
{
    margin-top: 24px;
    font-size: 24px;
    font-family: "JosefinSans-Bold",sans-serif;
    color: black;
    text-align: center;
}

.card:hover
{
    box-shadow: 0px 0px 24px rgb(0, 0, 0,0.1);
    transform: scale3d(1.05,1.05,1.05);
    background-color: rgb(0, 0, 0,0.02);
}
</style>