<template>
  <div class="cart-item">
    <img :src="product.image" :alt="product.name" />
    <div class="cart-item-details">
      <div class="cart-item-description">
        <div class="cart-item-name">{{ product.name }}</div>
        <div class="cart-item-price">{{ product.price }} {{ product.currency }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
};
</script>
