<template>
  <div class="product-page">
    <div class="product-page__info">
      <div class="product-page__image-container">
        <img :src="product.image" alt="Product Image" class="product-page__image" />
      </div>
      <h2 class="product-page__name">{{ product.name }}</h2>
      <div class="product-page__price">{{ formattedPrice }}</div>
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
  computed: {
    formattedPrice() {
      return `${this.product.price} ${this.product.currency}`;
    },
  },
};
</script>
