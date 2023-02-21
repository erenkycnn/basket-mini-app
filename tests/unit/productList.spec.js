import { shallowMount } from '@vue/test-utils';
import ProductList from '@/components/Products/ProductList.vue';
import Product from '@/components/Products/ProductItem.vue';

describe('ProductList.vue', () => {
  test('renders a list of products', () => {
    const products = [
      { id: 1, name: 'Product 1', price: 10 },
      { id: 2, name: 'Product 2', price: 20 },
      { id: 3, name: 'Product 3', price: 30 },
    ];

    const wrapper = shallowMount(ProductList, {
      propsData: {
        products,
      },
    });

    expect(wrapper.findAllComponents(Product)).toHaveLength(products.length);
  });

  test('emits an "add-to-cart" event when a product is added to cart', () => {
    const products = [{ id: 1, name: 'Product 1', price: 10 }];

    const wrapper = shallowMount(ProductList, {
      propsData: {
        products,
      },
    });

    const productComponent = wrapper.findComponent(Product);
    productComponent.vm.$emit('add-to-cart', { product: products[0], quantity: 1 });

    expect(wrapper.emitted('add-to-cart')).toHaveLength(1);
    expect(wrapper.emitted('add-to-cart')[0]).toEqual([
      { product: products[0], quantity: 1 },
    ]);
  });
});
