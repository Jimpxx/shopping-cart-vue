<template>
    <h1>Cart</h1>
    <div class="items">
        <cart-item v-for="item in cart" :key="item.id" :item="item">
        </cart-item>
    </div>
    <div class="total-price">{{ total }} with {{ qty }} items in the cart</div>
</template>

<script>
import { computed, isRef } from 'vue';
import { useStore } from 'vuex';

import CartItem from '../components/cart/CartItem';
export default {
    components: {
        CartItem,
    },
    setup() {
        const store = useStore();
        const cart = computed(() => store.getters['cart/cart']);
        const total = computed(() => store.getters['cart/total']);
        const qty = computed(() => store.getters['cart/qty']);

        console.log(isRef(cart));
        return {
            cart,
            total,
            qty,
        };
    },
};
</script>

<style></style>
