<template>
    <base-card>
        <div class="product">
            <div class="img-area">
                <img :src="product.image" :alt="product.title" />
            </div>
            <div class="info">
                <p class="title">
                    {{ product.title }}
                </p>
                <p class="price">{{ product.price }}$</p>
                <div class="button-area">
                    <base-button @click="addToCart(product)"
                        >Add to cart</base-button
                    >
                </div>
            </div>
        </div>
    </base-card>
</template>

<script>
import { useStore } from 'vuex';
import BaseCard from './ui/BaseCard.vue';
export default {
    components: { BaseCard },
    props: ['product'],
    setup() {
        const store = useStore();
        function addToCart(product) {
            store.dispatch('cart/addToCart', product);
        }
        return {
            addToCart,
        };
    },
};
</script>

<style lang="scss" scoped>
.product {
    // padding: 1rem 1rem 0 1rem;
    padding: 1rem;
    // height: 100%;
    // position: relative;
    // bottom: 1px;
    .img-area {
        margin-bottom: 1rem;
        img {
            max-width: 100%;
            height: 160px;
        }
    }
    .info {
        .title {
            font-size: 1.3rem;
        }
        .price {
            font-weight: bold;
        }
        .button-area {
            button {
                font-size: inherit;
                padding: 0.5rem 1.5rem;
                // width: 100%;
                // margin: 0;
            }
        }
    }
}
</style>
