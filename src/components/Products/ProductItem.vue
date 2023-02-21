<template>
  <div class="product-page">
    <div class="product-page__info">
      <div class="product-page__image-container">
        <img :src="product.image" alt="Product Image" class="product-page__image" />
      </div>
      <h2 class="product-page__name">{{ product.name }}</h2>
      <div class="product-page__price">{{ formattedPrice }}</div>
      <button class="product-page__add-to-cart" @click="addToCart">Add to cart</button>
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
  methods: {
    addToCart() {
      this.$emit('add-to-cart', { product: this.product, quantity: this.quantity });
    },
  },
  computed: {
    formattedPrice() {
      return `${this.product.price} ${this.product.currency}`;
    },
  },
};
</script>
