<template>
  <div class="product-list">
    <ProductItem
      v-for="product in products"
      :key="product.id"
      :product="product"
      @add-to-cart="handleAddToCart"
    />
  </div>
</template>

<script>
import ProductItem from '@/components/Products/ProductItem.vue';

export default {
  components: {
    ProductItem,
  },
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  methods: {
    handleAddToCart({ product, quantity }) {
      this.$emit('add-to-cart', { product, quantity });
    },
  },
};
</script>

<style scoped>
.product-list {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin: 0 -10px;
}

.product {
  flex-basis: 31.33%;
  margin-bottom: 30px;
  padding: 0 10px;
  box-sizing: border-box;
}

@media screen and (max-width: 1024px) {
  .product {
    flex-basis: 48%;
  }
}

@media screen and (max-width: 768px) {
  .product {
    flex-basis: 100%;
    margin-bottom: 20px;
    padding: 0;
  }
}
</style>
