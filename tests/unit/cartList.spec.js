import { shallowMount } from '@vue/test-utils';
import CartSummary from '@/components/CartComponents/CartList.vue';

describe('CartSummary', () => {
  const cartProducts = [
    { id: 1, name: 'Product 1', price: 10, quantity: 2, currency: 'USD' },
    { id: 2, name: 'Product 2', price: 20, quantity: 1, currency: 'USD' },
  ];
  const cartTotalPrice = 40;

  it('displays "Your cart is empty." when there are no cart products', () => {
    const wrapper = shallowMount(CartSummary, {
      props: {
        cartProducts: [],
        cartTotalPrice: 0,
      },
    });

    expect(wrapper.find('div').text()).toBe('Your cart is empty.');
  });

  it('displays the cart products and total price when there are cart products', () => {
    const wrapper = shallowMount(CartSummary, {
      props: {
        cartProducts,
        cartTotalPrice,
      },
    });

    expect(wrapper.findAllComponents({ name: 'CartItem' })).toHaveLength(
      cartProducts.length
    );
    expect(wrapper.find('.cart-summary-total p').text()).toBe(
      `Total: ${cartTotalPrice} ${cartProducts[0].currency}`
    );
  });

  it('emits a "remove-cart-item" event when a CartItem is removed', () => {
    const wrapper = shallowMount(CartSummary, {
      props: {
        cartProducts,
        cartTotalPrice,
      },
    });
    const cartItem = wrapper.findComponent({ name: 'CartItem' });
    cartItem.vm.$emit('remove-cart-item', cartProducts[0]);

    expect(wrapper.emitted('remove-cart-item')).toBeTruthy();
    expect(wrapper.emitted('remove-cart-item')[0]).toEqual([cartProducts[0]]);
  });
});
