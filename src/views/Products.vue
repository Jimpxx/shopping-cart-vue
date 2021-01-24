<template>
    <h1>Products</h1>
    <div class="product-list">
        <Product
            v-for="product in fetchedProducts"
            :key="product.id"
            :product="product"
        ></Product>
    </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

import Product from '../components/Product.vue';

export default {
    components: { Product },
    setup() {
        const store = useStore();
        // const products = ref([]);
        const fetchedProducts = computed(() => {
            return store.getters['products/products'];
        });

        function fetchProducts() {
            store.dispatch('products/fetchProducts');
        }
        fetchProducts();

        return {
            fetchedProducts,
        };
    },
};
</script>

<style lang="scss">
.product-list {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 1rem;
    justify-content: space-between;
    // width: 100%;
    // height: 100%;
}
// .product-list {
//     display: flex;
//     justify-content: space-between;
//     width: 100%;
//     height: 100%;
//     flex-wrap: wrap;
// }
</style>
