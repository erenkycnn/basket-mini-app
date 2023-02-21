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
  <Toast v-if="showToast" :message="toastMessage" :type="toastType" />
</template>

<script>
import Toast from '../Toast.vue';
import { mapActions } from 'vuex';

export default {
  components: {
    Toast,
  },
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
      this.updateCartItemQuantity({
        productId: this.product.id,
        quantity: newQuantity,
      });
      console.log('calisti');
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

<style scoped>
.cart-item {
  display: flex;
  flex-direction: row;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  padding: 10px;
}

.cart-item img {
  width: 100px;
  height: 100px;
  margin-right: 20px;
}

.cart-item-details {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.cart-item-name {
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 5px;
}

.cart-item-price {
  font-weight: bold;
  font-size: 16px;
}

.cart-item-quantity {
  display: flex;
  align-items: center;
}

.cart-item-quantity-label {
  font-size: 16px;
  margin-right: 10px;
}

.cart-item-quantity-input {
  width: 50px;
  height: 30px;
  font-size: 16px;
  text-align: center;
}

.remove-button {
  background-color: #ff0000;
  color: #fff;
  border: none;
  padding: 8px 12px;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

/* Mobile styles */

@media only screen and (max-width: 767px) {
  .cart-item {
    flex-direction: column;
    align-items: center;
  }

  .cart-item img {
    width: 100%;
    height: auto;
    margin-right: 0;
    margin-bottom: 20px;
    max-width: 250px;
  }

  .cart-item-details {
    flex-direction: column;
    align-items: center;
  }

  .cart-item-quantity {
    margin-top: 10px;
  }

  .remove-button {
    margin-top: 20px;
  }
}
</style>
