import { createStore } from 'vuex';

// import mutations from './mutations';
// import actions from './actions';
// import getters from './getters';

import productsModule from './modules/products/index';
import cartModule from './modules/cart/index';

export default createStore({
    modules: {
        products: productsModule,
        cart: cartModule,
    },
    // state() {},
    // mutations,
    // actions,
    // getters,
});
