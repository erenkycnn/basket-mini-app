import { shallowMount } from '@vue/test-utils';
import ProductPage from '../../src/components/Products/ProductItem.vue';

describe('ProductPage.vue', () => {
  const product = {
    name: 'Test Product',
    price: 20,
    currency: 'USD',
    image: 'test.jpg',
  };

  it('displays the product name', () => {
    const wrapper = shallowMount(ProductPage, {
      propsData: { product },
    });
    const name = wrapper.find('.product-page__name');
    expect(name.text()).toMatch(product.name);
  });

  it('displays the product price', () => {
    const wrapper = shallowMount(ProductPage, {
      propsData: { product },
    });
    const price = wrapper.find('.product-page__price');
    expect(price.text()).toMatch(`${product.price} ${product.currency}`);
  });

  it('emits an "add-to-cart" event when the "Add to cart" button is clicked', () => {
    const wrapper = shallowMount(ProductPage, {
      propsData: { product },
    });
    const button = wrapper.find('.product-page__add-to-cart');
    button.trigger('click');
    expect(wrapper.emitted('add-to-cart')).toBeTruthy();
    expect(wrapper.emitted('add-to-cart')[0]).toEqual([{ product, quantity: 1 }]);
  });

  it('increases the quantity when the "+" button is clicked', () => {
    const wrapper = shallowMount(ProductPage, {
      propsData: { product },
    });
    const button = wrapper.find('.product-page__quantity-button:last-of-type');
    button.trigger('click');
    expect(wrapper.vm.quantity).toBe(2);
  });

  // eslint-disable-next-line max-len
  it('does not decrease the quantity when the "-" button is clicked and the quantity is 1', () => {
    const wrapper = shallowMount(ProductPage, {
      propsData: { product },
    });
    wrapper.setData({ quantity: 1 });
    const button = wrapper.find('.product-page__quantity-button:first-of-type');
    button.trigger('click');
    expect(wrapper.vm.quantity).toBe(1);
  });
});
