<template>
  <div>
    <ProductList :products="products" @add-to-cart="handleAddToCart" />
    <Toast v-if="showToast" :message="toastMessage" :type="toastType" />
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import ProductService from '@/services/productService';
import ProductList from '@/components/Products/ProductList';
import Toast from '@/components/Toast';

export default {
  components: {
    Toast,
    ProductList,
  },
  data() {
    return {
      showToast: false,
      toastMessage: '',
      toastType: '',
    };
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
        this.showToast = true;
        this.toastMessage = `${quantity} ${product.name} added to cart`;
        this.toastType = 'success';
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      } catch (error) {
        this.showToast = true;
        this.toastMessage = `${quantity} ${product.name} is out of stock`;
        this.toastType = 'error';
        setTimeout(() => {
          this.showToast = false;
        }, 3000);
      }
    },
  },
};
</script>

<style scoped></style>
