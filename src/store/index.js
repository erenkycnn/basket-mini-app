import { createStore } from 'vuex';

const store = createStore({
  state: {
    products: [],
    cart: [],
    cartValue: 0,
  },
  mutations: {
    setProducts(state, products) {
      state.products = products;
    },
    addToCart(state, { product, quantity }) {
      state.cartValue += product.price * quantity;
      const existingProduct = state.cart.find((p) => p.id === product.id);
      if (existingProduct) {
        state.cart[state.cart.indexOf(existingProduct)].quantity += quantity;
        return;
      }
      state.cart.push({ ...product, quantity });
    },
    removeCartItem(state, productId) {
      const existingProduct = state.cart.find((p) => p.id === productId);
      if (existingProduct) {
        state.cartValue -= existingProduct.price * existingProduct.quantity;
        state.cart = state.cart.filter((p) => p.id !== productId);
      }
    },
    updateCartItemQuantity(state, { productId, quantity }) {
      const existingProduct = state.cart.find((p) => p.id === productId);
      if (existingProduct) {
        state.cartValue -= existingProduct.price * existingProduct.quantity;
        existingProduct.quantity = quantity;
        state.cartValue += existingProduct.price * existingProduct.quantity;
      }
    },
  },
  actions: {
    async fetchProducts({ commit }, products) {
      commit('setProducts', products);
    },
    async addToCart({ commit }, { product, quantity }) {
      commit('addToCart', { product, quantity });
    },
    removeCartItem({ commit }, product) {
      commit('removeCartItem', product.id);
    },
    updateCartItemQuantity({ commit }, { productId, quantity }) {
      commit('updateCartItemQuantity', { productId, quantity });
    },
  },
  getters: {
    cartProducts: (state) => state.cart,
    cartTotalPrice: (state) => state.cartValue,
  },
});

export default store;
