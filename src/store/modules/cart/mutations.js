export default {
    addItemToCart(state, payload) {
        const prodId = payload.id;
        const itemExists = state.items.findIndex(
            (item) => item.productId === prodId,
        );

        if (itemExists >= 0) {
            state.items[itemExists].qty += 1;
        } else {
            const newItem = {
                productId: payload.id,
                title: payload.title,
                image: payload.image,
                price: payload.price,
                qty: 1,
            };
            state.items.push(newItem);
        }
        state.total += payload.price;
        state.qty += 1;
    },
    removeItemFromCart(state, payload) {
        const prod = state.items.findIndex(
            (item) => item.productId === payload,
        );
        state.qty -= 1;
        state.total -= state.items[prod].price;
        if (state.items[prod].qty === 1) {
            state.items.splice(prod, 1);
        } else {
            state.items[prod].qty -= 1;
        }
    },
};
