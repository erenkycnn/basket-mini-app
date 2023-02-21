<template>
  <div class="cart-summary">
    <div v-if="cartProducts.length === 0">Your cart is empty.</div>
    <div v-else>
      <div v-for="(product, index) in cartProducts" :key="index">
        <CartItem
          :product="product"
          @remove-cart-item="this.$emit('remove-cart-item', product)"
        />
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

<style scoped>
.cart-summary {
  margin: 1rem;
}

.cart-summary p,
.cart-summary h3 {
  margin: 0;
}

.cart-summary hr {
  margin: 0.5rem 0;
}

.cart-summary-total {
  margin-top: 1rem;
  text-align: right;
  font-weight: bold;
}
</style>
