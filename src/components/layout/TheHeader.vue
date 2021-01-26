<template>
    <header>
        <nav>
            <div class="logo">
                <router-link to="/"><span>Vue Shop</span></router-link>
            </div>
            <div class="links">
                <!-- <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> -->
                <router-link to="/products">Products</router-link>
                <router-link to="/cart">Cart ({{ qty }})</router-link>
            </div>
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

<style lang="scss" scoped>
nav {
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 40px 0;
    background: #270041;
    color: #fff;
    .logo {
        font-size: 2rem;
    }
    a {
        font-weight: bold;
        color: #fff;
        // color: #2c3e50;
        text-decoration: none;
        margin-right: 1rem;

        &.router-link-exact-active {
            color: #ac84c7;
        }
    }
}
</style>
