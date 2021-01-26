<template>
    <the-header></the-header>
    <base-container>
        <router-view />
    </base-container>
</template>

<script>
import BaseContainer from './components/ui/BaseContainer';
import TheHeader from './components/layout/TheHeader';
export default {
    components: {
        BaseContainer,
        TheHeader,
    },
};
</script>

<style lang="scss">
body {
    margin: 0;
    box-sizing: border-box;
    padding: 0;
}
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    width: 100%;
}
</style>
