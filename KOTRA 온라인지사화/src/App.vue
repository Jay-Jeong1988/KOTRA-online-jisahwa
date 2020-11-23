<template>
    <div id="app">
        <router-view/>
        <Footer />
    </div>
</template>

<script>
    import Home from './components/Home.vue';
    import Footer from './components/Footer.vue';
    export default {
        name: 'app',
        components: {
            Home, Footer
        }
    };
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
    body {
        font-family: 'Lato', sans-serif;
    }
    #app {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
</style>

