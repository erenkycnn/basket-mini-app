<template>
  <CartList
    :cartProducts="cartProducts"
    :cartTotalPrice="cartTotalPrice"
    @remove-cart-item="handleRemoveCart"
  />
  <Toast v-if="showToast" :message="toastMessage" :type="toastType" />
</template>

<script>
import CartList from '@/components/CartComponents/CartList.vue';
import Toast from '@/components/Toast.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    CartList,
    Toast,
  },
  computed: {
    cartProducts() {
      const cartProducts = this.$store.getters.cartProducts;
      return cartProducts ? cartProducts : [];
    },
    cartTotalPrice() {
      return this.$store.getters.cartTotalPrice;
    },
  },
  data() {
    return {
      showToast: false,
      toastMessage: '',
      toastType: '',
    };
  },
  methods: {
    ...mapActions(['removeCartItem']),
    handleRemoveCart(product) {
      this.removeCartItem(product);
      this.showToast = true;
      this.toastMessage = `${product.name} successfully deleted from card`;
      this.toastType = 'error';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    },
  },
};
</script>
