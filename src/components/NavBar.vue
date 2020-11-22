<template>
<nav>
    <div class="container">
        <router-link class="logo" to="/home">
            <h2> Know <span>ur</span> phone </h2>
        </router-link>

        <ul class="nav-list flex">
            <li>
                <router-link :to="{ name: 'home' }">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'brands' }">Brands</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'mobiles'}">Mobiles</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'blog' }">Blog</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'login' }">Login</router-link>
            </li>
        </ul>
    
        <button class="hamburger hamburger--spin">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</nav>
</template>

<script>
    export default {
        
    }
</script>

<style scoped>

nav
{
    background: linear-gradient(to left,#6442ff 0%,#9012fe 100%);
    position: relative;
    z-index: 3;
}

nav .container
{
    height: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.logo h2
{
    font-family: "KaushanScript-Regular", serif;
    text-transform: capitalize;
    color: #ffffff;
    font-size: 30px;
}

.logo h2 span { color: #ec5858; }

.hamburger { display: none; }

.nav-list li { margin: 0 18px; }

.nav-list li:first-child { margin-left: 0; }

.nav-list li:last-child { margin-right: 0; }

.nav-list a
{
    font-family: "Montserrat-SemiBold", serif;
    text-transform: uppercase;
    color: #ffffff;
    font-size: 13px;
    height: 100px;
    display: flex;
    align-items: center;
}

.nav-list a:hover { color: rgb(255, 164, 91); }

</style>