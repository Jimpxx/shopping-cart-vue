export default {
    async addToCart(context, payload) {
        console.log('Payload:');
        console.log(payload);
        const prodId = payload.id;
        const products = await context.rootGetters['products/products'];
        const product = products.filter((prod) => prod.id === prodId);

        console.log(product);
        // console.log(product[0].id);

        context.commit('addItemToCart', product[0]);
    },
    removeFromCart(context, payload) {
        context.commit('removeItemFromCart', payload);
    },
};
