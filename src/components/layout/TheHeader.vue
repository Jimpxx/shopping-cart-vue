<template>
    <header>
        <nav>
            <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
            <router-link to="/products">Products</router-link>
            <router-link to="/cart">Cart ({{ qty }})</router-link>
        </nav>
    </header>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';
export default {
    setup() {
        const store = useStore();
        const qty = computed(() => store.getters['cart/qty']);
        return { qty };
    },
};
</script>

<style lang="scss">
nav {
    padding: 30px;

    a {
        font-weight: bold;
        color: #2c3e50;
        margin-right: 1rem;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
