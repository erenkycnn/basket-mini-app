<template>
  <div>
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
