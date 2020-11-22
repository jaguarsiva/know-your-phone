<template>
	<div id="app">
		<NavBar />
		<router-view />
		<TheFooter class="footer"/>
	</div>
</template>

<script>
import NavBar from '@/components/NavBar.vue';
import TheFooter from '@/components/TheFooter.vue';

export default {
	components: {
		NavBar,
		TheFooter
	}
}
</script>

<style>

/* Element Stylings */

html { overflow-x: hidden; scroll-behavior: smooth; }

* , *::after , *::before
{
	margin: 0;
	padding: 0;
	box-sizing: border-box;
}

a { text-decoration: none; outline: none; }

ul { list-style-type: none; }

h1,h2,h3,h4,h5,h6 { font-weight: normal; }

button
{
	border: none;
	outline: none;
	cursor: pointer;
	background: none;
}

/* Common Stylings */

.container
{
	max-width: 1330px;
	padding: 0 15px;
	margin: 0 auto;
}

.flex 
{
	display: flex;
	flex-wrap: wrap;
}

/* Font Imports */

@font-face
{
	font-family: "KaushanScript-Regular";
	src: url("./assets/fonts/KaushanScript-Regular.ttf");
	font-display: block;
}

@font-face
{
	font-family: "Montserrat-Regular";
	src: url("./assets/fonts/Montserrat-Regular.ttf");
	font-display: block;
}

@font-face
{
	font-family: "Montserrat-SemiBold";
	src: url("./assets/fonts/Montserrat-SemiBold.ttf");
	font-display: block;
}

@font-face
{
	font-family: "JosefinSans-Bold";
	src: url("./assets/fonts/JosefinSans-Bold.ttf");
	font-display: block;
}

/* Local Stylings */
#app
{
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.footer { margin-top: auto; }

</style>