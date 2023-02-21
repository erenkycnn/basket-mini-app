<template>
  <div>
    <ProductList :products="products" @add-to-cart="handleAddToCart" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductService from '@/services/productService';
import ProductList from '@/components/Products/ProductList';

export default {
  components: {
    ProductList,
  },
  computed: mapState(['products']),
  async created() {
    try {
      const productRes = await ProductService.getProducts();
      this.fetchProducts(productRes.data);
    } catch (error) {
      throw new Error(error);
    }
  },
  methods: {
    ...mapActions(['fetchProducts', 'addToCart']),
    async handleAddToCart({ product, quantity }) {
      try {
        await ProductService.addToCart(product.id, quantity);
        this.addToCart({ product, quantity });
      } catch (error) {
        console.log('error', error);
      }
    },
  },
};
</script>

<style scoped></style>
