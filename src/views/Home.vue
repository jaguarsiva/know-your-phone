<template>
    <div id="home">
        <div class="banner">
            <div class="container">
                <h1 class="banner-text">
                    Get to know about all phones specs in one place.
                </h1>
                <img src="../assets/banner.png" alt="banner" class="banner-image">
            </div>
        </div>

        <h1 class="brand-heading">Popular Gadgets</h1>

        <ProductsList brandName="OnePlus" />
        <ProductsList brandName="Motorola" />
        <ProductsList brandName="Samsung" />
        <ProductsList brandName="Apple" />
        <ProductsList brandName="Oppo" />
        <ProductsList brandName="vivo" />
        <ProductsList brandName="Xiaomi" />

    </div>
</template>

<script>
import ProductsList from '@/components/ProductsList.vue';

export default {
    components: {
        ProductsList,
    }
}
</script>

<style scoped>

.banner
{
    background: linear-gradient(to left,#6442ff 0%,#9012fe 100%);
    height: calc(100vh + 100px);
    transform: skewY(-12deg);
    position: relative;
    z-index: 2;
    top: -170px;
    padding: 170px 0 0;
    overflow: hidden;
    box-shadow: 0 3px 12px rgb(0,0,0,0.5);
}

.banner .container
{
    transform: skewY(12deg);
    position: relative;
    display: flex;
    align-items: center;
    height: 100%;
}

.banner::after
{
    content: "";
    position: absolute;
    bottom: 0; left: 0;
    height: 50px; width: 100%;
    border-top: 50px solid transparent;
    border-left: 100vw solid #8D15FE;
    z-index: -1;
}

.banner-image 
{ 
    height: 100vh;
    position: absolute;
    top: 75px; right: 15px;
    filter: drop-shadow(0px 0px 18px rgb(255,255,255,0.5));
    transform: rotate(-9deg);
}

.banner-text
{
    font-size: 75px;
    font-family: "JosefinSans-Bold",sans-serif;
    width: 55%;
    color: #ffffff;
    line-height: 1.25;
}

.brand-heading
{
    font-size: 60px;
    font-family: "JosefinSans-Bold",sans-serif;
    text-align: center;
}

</style>