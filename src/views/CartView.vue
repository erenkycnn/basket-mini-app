<template>
  <CartList :cartProducts="cartProducts" :cartTotalPrice="cartTotalPrice" />
</template>

<script>
import CartList from '@/components/CartComponents/CartList.vue';

export default {
  components: {
    CartList,
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
};
</script>
