export default {
    async fetchProducts(context) {
        const response = await fetch(
            'https://fakestoreapi.com/products/category/electronics',
        );
        const resData = await response.json();
        context.commit('setProducts', resData);
    },
};
