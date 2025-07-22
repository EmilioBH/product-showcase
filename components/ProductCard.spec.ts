import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';

import ProductCard from './ProductCard.vue';
import { formatCurrency } from '~/utils/formatters';
import type { Product } from '~/types/index';

describe('ProductCard', () => {

  const mockProduct: Product = {
    id: 1,
    name: 'Café de Colombia',
    price: 12.50,
    image: 'https://example.com/cafe.jpg',
    description: 'Un café suave y aromático.'
  };

  it('shouldrender the product properly', async () => {
    const wrapper = await mountSuspended(ProductCard, {
      props: {
        product: mockProduct
      }
    });

    const link = wrapper.findComponent({ name: 'NuxtLink' });
    expect(link.props('to')).toBe(`/products/${mockProduct.id}`);

    const image = wrapper.find('.product-card__image');
    expect(image.attributes('src')).toBe(mockProduct.image);
    expect(image.attributes('alt')).toBe(mockProduct.name);

    const name = wrapper.find('.product-card__name');
    expect(name.text()).toBe(mockProduct.name);

    const price = wrapper.find('.product-card__price');
    const expectedPrice = formatCurrency(mockProduct.price);
    expect(price.text()).toBe(expectedPrice);
  });
});