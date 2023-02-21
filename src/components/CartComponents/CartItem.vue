<template>
  <div class="cart-item">
    <img :src="product.image" :alt="product.name" />
    <div class="cart-item-details">
      <div class="cart-item-description">
        <div class="cart-item-name">{{ product.name }}</div>
        <div class="cart-item-price">{{ product.price }} {{ product.currency }}</div>
        <div class="cart-item-quantity">
          <label class="cart-item-quantity-label" for="quantity-input">Quantity:</label>
          <input
            class="cart-item-quantity-input"
            type="number"
            id="quantity-input"
            name="quantity"
            v-model="quantity"
            min="1"
          />
        </div>
      </div>
      <button class="remove-button" @click="this.$emit('remove-cart-item', this.product)">
        Remove Product
      </button>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      quantity: this.product.quantity,
    };
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['updateCartItemQuantity']),
  },
  mounted() {
    this.$watch('quantity', (newQuantity) => {
      this.updateCartItemQuantity({ productId: this.product.id, quantity: newQuantity });
      this.showToast = true;
      // eslint-disable-next-line max-len
      this.toastMessage = `${this.product.name}'s quantity has been updated to ${newQuantity}`;
      this.toastType = 'warning';
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    });
  },
  unmounted() {},
};
</script>
