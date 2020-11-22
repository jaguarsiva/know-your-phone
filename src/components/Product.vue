<template>
    <div id="product" class="container">
        <div class="head">
            <img :src="mobile.img_url" alt="">
            <div class="head-text">
                <h1>{{ mobile.brand + " " + mobile.model}} </h1>
                <h2> ₹ {{ formatMoney(Math.floor(mobile.approx_price_EUR * 87.93)) }} /- </h2>
                <h2> RAM : {{ mobile.RAM }} </h2>
                <h2> Internal Memory: {{ mobile.internal_memory }} </h2>
                <h2> Battery : {{ mobile.battery }} </h2>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    data() {
        return {
            mobile: {}
        }
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
    },
    props: {
        id: {
            type: String,
            required: true
        }
    },
    computed: {
        ...mapGetters(['getMobileByUrl'])
    },
    created () {
        this.mobile = this.getMobileByUrl(this.$route.params.id);
    }
}
</script>

<style scoped>

#product
{
    margin: 100px auto;
}

.head { display: flex; }

.head img 
{ 
    height: 500px;
    box-shadow: 0px 0px 24px rgb(0, 0, 0,0.1);
    padding: 75px 50px;
    border-radius: 9px;
    cursor: pointer;
    margin-right: 100px;
}

.head-text * { margin-bottom: 25px; }

h1
{
    font-size: 48px;
    font-family: "JosefinSans-Bold",sans-serif;
}

h2
{
    font-size: 30px;
    font-family: "Montserrat-SemiBold", serif;
    line-height: 1.5;
}

@media (max-width: 1023px)
{
    .head { flex-direction: column; }

    .head img { margin: 0 auto; }

    .head-text { margin: 100px auto 0; text-align: center; }
}

@media (max-width: 450px)
{
    .head img { width: 90%; height: auto; padding: 0; box-shadow: none; }
}

</style>