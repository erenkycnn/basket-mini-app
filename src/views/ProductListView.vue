<template>
  <div>
    <ProductList :products="products" />
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
    ...mapActions(['fetchProducts']),
  },
};
</script>

<style scoped></style>
