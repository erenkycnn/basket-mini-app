<template>
  <div class="cart-summary">
    <div v-if="cartProducts.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="(product, index) in cartProducts" :key="index">
        <CartItem :product="product" />
      </div>
      <div class="cart-summary-total">
        <p>Total: {{ cartTotalPrice }} {{ cartProducts[0].currency }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import CartItem from '@/components/CartComponents/CartItem.vue';

export default {
  components: {
    CartItem,
  },
  props: {
    cartProducts: {
      type: Array,
      required: true,
    },
    cartTotalPrice: {
      type: Number,
      required: true,
    },
  },
};
</script>
