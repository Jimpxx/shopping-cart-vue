export default {
    async addToCart(context, payload) {
        const prodId = payload.id;
        const products = await context.rootGetters['products/products'];
        const product = products.filter((prod) => prod.id === prodId);

        context.commit('addItemToCart', product[0]);
    },
    removeFromCart(context, payload) {
        context.commit('removeItemFromCart', payload);
    },
};
