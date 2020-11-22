<template>
<nav>
    <div class="container">
        <router-link class="logo" to="/home">
            <h2> Know <span>ur</span> phone </h2>
        </router-link>

        <ul 
            class="nav-list" 
            :class="{ 'menu-active' : opened , 'menu-open-anm': opened, 'menu-close-anm': closing }"
        >
            <li>
                <router-link :to="{ name: 'home' }" @click.native="opened ? $refs.hamburger.click() : ''">Home</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'brands' }" @click.native="opened ? $refs.hamburger.click() : ''">Brands</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'mobiles'}" @click.native="opened ? $refs.hamburger.click() : ''">Mobiles</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'blog' }" @click.native="opened ? $refs.hamburger.click() : ''">Blog</router-link>
            </li>
            <li>
                <router-link :to="{ name: 'login' }" @click.native="opened ? $refs.hamburger.click() : ''">Login</router-link>
            </li>
        </ul>
    
        <button class="hamburger hamburger--spin" @click="handleHamburgerClick" ref="hamburger">
            <span class="hamburger-box">
                <span class="hamburger-inner"></span>
            </span>
        </button>
    </div>
</nav>
</template>

<script>
    export default {
        data() {
            return {
                opened: false,
                closing: false
            }
        },
        methods: {
            handleHamburgerClick() {
                if( !this.opened )
                {
                    document.querySelector("html").classList.add("no-scroll");
                    this.opened = true;
                }
                else
                {
                    this.closing = true;
                    setTimeout( () => {
                        this.closing = false;
                        this.opened = false;
                        document.querySelector("html").classList.remove("no-scroll");
                    }, 500);
                }
            }
        },
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

.nav-list { display: flex; }

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

@media (max-width: 767px)
{
    .hamburger
    { 
        display: flex;
        justify-content: center;
        align-items: center;
        transition: opacity 0.15s linear , filter 0.15s linear;
        border: 0; padding: 0; outline: 0;
        margin: 0 0 0 25px;
        background-color: transparent;
        overflow: visible;
        position: relative; z-index: 5;
        cursor: pointer;
    }

    .hamburger:hover .hamburger-inner ,
    .hamburger:focus .hamburger-inner 
    { background-color: #000000; color: #000000; }

    .hamburger-box 
    {
        width: 30px; height: 24px;
        display: inline-block;
        position: relative; 
    }
    
    .hamburger-inner 
    {
        display: block; top: 50%;
        margin-top: -2px;
        background-color: #ffffff;
        color: #ffffff;
    }

    .hamburger-inner, .hamburger-inner::before, .hamburger-inner::after 
    {
        width: 30px; height: 4px;
        border-radius: 4px;
        position: absolute; left: 0;
        transition: transform 0.15s ease;
    }

    .hamburger-inner::before, .hamburger-inner::after 
    { 
        content: "";
        transform: scaleX(0.75);
        background-color: currentColor;
    }

    .hamburger-inner::before { top: -8px; }

    .hamburger-inner::after { bottom: -8px; }

    .hamburger--spin .hamburger-inner 
    {
        transition-duration: 0.22s;
        transition-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19); 
    }
    
    .hamburger--spin .hamburger-inner::before { transition: top 0.1s 0.25s ease-in, opacity 0.1s ease-in; }
    
    .hamburger--spin .hamburger-inner::after { transition: bottom 0.1s 0.25s ease-in, transform 0.22s cubic-bezier(0.55, 0.055, 0.675, 0.19); }
      
    .hamburger--spin.is-active .hamburger-inner 
    {
        transform: rotate(225deg);
        transition-delay: 0.12s;
        transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1); 
    }
    
    .hamburger--spin.is-active .hamburger-inner::before 
    {
        top: 0;
        opacity: 0;
        transition: top 0.1s ease-out, opacity 0.1s 0.12s ease-out; 
    }
     
    .hamburger--spin.is-active .hamburger-inner::after 
    {
        bottom: 0;
        transform: rotate(-90deg);
        transition: bottom 0.1s ease-out, transform 0.22s 0.12s cubic-bezier(0.215, 0.61, 0.355, 1); 
    }

    .nav-list { display: none; flex-direction: column; }

    .nav-list.menu-active
    {
        margin: 0;
        position: absolute; 
        border-bottom: 2px solid rgb(233,233,233);
        z-index: 2;
        overflow: hidden;
        width: 100vw;
        height: calc(100vh - 100px);
        top: 100px; left: 0;
        display: flex;
        justify-content: center;
        background: linear-gradient(to left,#6442ff 0%,#9012fe 100%);
    }

    .nav-list.menu-active li { height: auto; margin: 25px auto; text-align: center; }

    .nav-list.menu-active a { height: auto; margin: 0; font-size: 20px; }

    .menu-open-anm { animation: menu-open-anm 0.5s ease; }
    
    .menu-close-anm { animation: menu-close-anm 0.5s ease; }

    @keyframes menu-open-anm
    {
        from { height: 0px; padding: 0; }
        to {  height: calc(100vh - 100px);}
    }

    @keyframes menu-close-anm
    {
        0% { height: calc(100vh - 100px); }
        100% { height: 0px;  padding: 0; }
    }
}

</style>