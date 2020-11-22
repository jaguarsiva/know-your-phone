<template>
    <div class="container">
        <h1> {{ name }} </h1>

        <div v-if="loading">
            <img src="../assets/loader.gif" alt="loader" class="loader-img">
        </div>

        <div class="list">
            <ProductCard v-for="(phone,index) in phones" :key="index" :phone="phone"/>
        </div>

        <div class="pagination" v-if="!loading">
            <button class="prev-btn" :class="{ 'disabled' : isFirstPage }" @click="handleClick('prev')">
                <img src="../assets/active.png" alt="btn">
            </button>
            
            <span 
                v-for="(no,ind) in pageList" 
                :class="{ 'active' : no === page }"
                :key="ind" @click="handleClick(no)">
                {{ no }}
            </span>
            
            <button class="next-btn" :class="{ 'disabled' : isLastPage }" @click="handleClick('next')">
                <img src="../assets/active.png" alt="btn">
            </button>
        </div>

        <h5 class="open-page">Page {{ page }} of {{ maxPages }}</h5>
    </div>
</template>

<script>
import service from '@/services/service.js';
import ProductCard from '@/components/ProductCard.vue';

export default {
    props: {
        name: {
            type: String,
            required: true
        }
    },
    components: {
        ProductCard,
    },
    data() {
        return {
            phones: [],
            page: 1,
            maxPages: null
        }
    },
    methods: {
        async loadMobiles() {
            const resp = await service.getAllMobilesByBrand(this.name,this.page);
            this.phones = resp.data;
            var total = resp.headers['x-total-count'];
            this.maxPages = Math.round(total / 12);
            this.$store.dispatch('pushMobiles',resp.data);
        },
        async handleClick( str ){
            if(typeof str === "number")
                this.page = str;
            if( str === "prev" )
                this.page--;
            else if( str === "next" )
                this.page++;
            window.scrollTo(0,0);
            const resp = await service.getAllMobilesByBrand(this.name,this.page);
            this.phones = resp.data;
            this.$store.dispatch('pushMobiles',resp.data);
        }
    },
    created () {
        this.loadMobiles();
    },
    computed: {
        isFirstPage() {
            return this.page === 1;
        },
        isLastPage() {
            return this.page === this.maxPages;
        },
        pageList() {
            if( this.maxPages === 1 )
                return [1];
            else if( this.maxPages === 2 )
                return [1,2];
            else if( this.maxPages === 3 )
                return [1,2,3];
            else
            {
                if(this.page !== 1 && this.page !== this.maxPages )
                    return [this.page-1, this.page, this.page+1];
                else if(this.page !== 1 && this.page === this.maxPages )
                    return [this.page-2, this.page-1, this.page];
                else
                    return [1,2,3];
            }
        },
        loading() {
            return this.maxPages === null
        }
    }
}
</script>

<style scoped>

h1
{
    font-size: 45px;
    font-family: "JosefinSans-Bold",sans-serif;
    text-align: center;
    margin-top: 100px;
}

h5
{
    font-size: 35px;
    font-family: "JosefinSans-Bold",sans-serif;
    text-align: center;   
    margin-bottom: 50px;
}

.pagination
{
    height: 75px;
    margin: 50px auto;
    display: flex;
    justify-content: center;
    align-items: center;
}

.pagination span 
{
    cursor: pointer;
    display: inline-block;
    padding: 10px 15px;
    font-size: 25px;
    font-family: "JosefinSans-Bold",sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 12px;
    box-shadow: 3px 3px 12px rgb(0, 0, 0,0.1);
}

.pagination span.active { background-color: rgb(248,198,74); }

.prev-btn,.next-btn { transition: transform 0.3s ease; margin: 0 12px; }

.prev-btn:hover, .next-btn:hover ,.pagination span
{ transform: scale(1.1,1.1); }

.prev-btn img { transform: rotate(180deg); }

.prev-btn img , .next-btn img { height: 50px; width: 50px; }

.list 
{
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    margin: 50px 0;
    justify-content: space-around;
}

.disabled { pointer-events: none; filter: grayscale(100%); }

.loader-img { max-width: 100%; }

@media (max-width: 425px)
{

    .pagination span { font-size: 20px; padding: 5px 10px; } 

    .prev-btn img , .next-btn img { height: 35px; width: 35px; }
}

</style>