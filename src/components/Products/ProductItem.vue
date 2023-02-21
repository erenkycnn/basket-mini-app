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

<style lang="scss">
.product-page {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: Arial, sans-serif;
  margin: 1rem;
  padding: 1rem;
  border: 1px solid orange;
  border-radius: 0.5rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }

  &__image-container {
    width: 100%;
    margin-bottom: 1rem;

    @media (min-width: 768px) {
      width: 100%;
    }
  }

  &__image {
    width: 100%;
    max-width: 300px;
  }

  &__info {
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 100%;

    @media (min-width: 768px) {
      width: 60%;
    }
  }

  &__name {
    color: rgb(123, 123, 123);
    font-size: 1rem;
    font-weight: 600;
    margin: 0.5rem 0;
  }

  &__description {
    margin: 0 0 1rem;
  }

  &__price {
    margin: 0 0 1rem;
    font-weight: bold;
  }

  &__quantity {
    margin: 0 0 1rem;
    display: flex;
    align-items: center;

    div {
      display: flex;
      align-items: center;
    }

    &-label {
      font-size: 1rem;
    }

    &-input {
      width: 2rem;
      font-size: 1rem;
      text-align: center;
      /* added this line */
    }

    &-button {
      font-size: 1.5rem;
      background: transparent;
      border: none;
      cursor: pointer;
      color: #f9a900;

      &:hover {
        color: #fbbc04;
      }

      &:disabled {
        color: grey;
        cursor: default;
      }
    }
  }

  &__add-to-cart {
    background-color: #f9a900;
    color: #fff;
    padding: 0.5rem 1rem;
    border: none;
    border-radius: 0.25rem;
    cursor: pointer;
    font-size: 1rem;
    text-align: center;

    &:hover {
      background-color: #fbbc04;
    }
  }
}
</style>
