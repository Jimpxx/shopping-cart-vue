<template>
    <base-card>
        <div class="item">
            <div class="image">
                <img :src="item.image" alt="" />
            </div>
            <div class="content">
                <div class="title">
                    {{ item.title }}
                </div>
                <div class="price">{{ calculatedPrice }}$</div>
                <div class="actions">
                    <base-button @click="removeFromCart(item)">-</base-button>
                    <span class="item-qty">{{ item.qty }}</span>
                    <base-button @click="addToCart(item)">+</base-button>
                </div>
            </div>
        </div>
    </base-card>
</template>

<script>
import { toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import BaseCard from '../ui/BaseCard';
export default {
    components: { BaseCard },
    props: ['item'],
    setup(props) {
        const store = useStore();
        const { item } = toRefs(props);
        const calculatedPrice = computed(() => {
            return +item.value.price * +item.value.qty;
        });

        function addToCart(item) {
            store.dispatch('cart/addToCart', {
                id: item.productId,
                title: item.title,
                image: item.image,
                price: item.price,
                qty: item.qty,
            });
        }

        function removeFromCart(item) {
            store.dispatch('cart/removeFromCart', item.productId);
        }

        return {
            calculatedPrice,
            addToCart,
            removeFromCart,
        };
    },
};
</script>

<style lang="scss" scoped>
.item {
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    // margin: 1rem;
    .image {
        margin-right: 2rem;
        img {
            max-height: 200px;
        }
    }
    .content {
        text-align: end;
        .title {
            font-weight: bold;
            font-size: 1.5rem;
        }
        .price {
            margin-top: 1rem;
            margin-right: 5rem;
            color: rgb(134, 34, 180);
            font-weight: bold;
            font-size: 1.2rem;
        }
        .actions {
            margin-top: 1rem;
            button {
                margin: 0;
            }
            .item-qty {
                margin: 0 1rem;
                background: #eee;
                padding: 0.5rem 2rem;
            }
        }
    }
}
</style>
