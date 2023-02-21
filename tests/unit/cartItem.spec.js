import { shallowMount } from '@vue/test-utils';
import CartItem from '@/components/CartComponents/CartItem.vue';

describe('CartItem.vue', () => {
  // eslint-disable-next-line max-len
  it('displays the product details and calls removeCartItem method when the button is clicked', async () => {
    const product = {
      id: 1,
      name: 'Test Product',
      quantity: 2,
      price: 10.99,
      currency: 'USD',
    };
    const wrapper = shallowMount(CartItem, {
      propsData: {
        product,
      },
    });
    const img = wrapper.find('img');
    expect(img.attributes('src')).toBe(product.image);
    expect(img.attributes('alt')).toBe(product.name);
    expect(wrapper.find('.cart-item-name').text()).toBe(product.name);
    expect(wrapper.find('.cart-item-quantity-input').element.value).toBe(
      product.quantity.toString()
    );
    expect(wrapper.find('.cart-item-price').text()).toBe(
      `${product.price} ${product.currency}`
    );

    wrapper.find('button').trigger('click');
    expect(wrapper.emitted('remove-cart-item')).toBeTruthy();
    expect(wrapper.emitted('remove-cart-item')[0]).toEqual([product]);
  });
});
