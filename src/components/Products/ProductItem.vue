<template>
  <div class="product-page">
    <div class="product-page__info">
      <div class="product-page__image-container">
        <img :src="product.image" alt="Product Image" class="product-page__image" />
      </div>
      <h2 class="product-page__name">{{ product.name }}</h2>
      <div class="product-page__price">{{ formattedPrice }}</div>
      <div class="product-page__quantity">
        <label for="quantity" class="product-page__quantity-label">Quantity:</label>
        <div>
          <button
            class="product-page__quantity-button"
            :disabled="quantity <= 1"
            @click="quantity -= 1"
          >
            -
          </button>
          <input
            type="number"
            min="1"
            id="quantity"
            v-model.number="quantity"
            class="product-page__quantity-input"
          />
          <button class="product-page__quantity-button" @click="quantity += 1">+</button>
        </div>
      </div>
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
  data() {
    return {
      quantity: 1,
    };
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
