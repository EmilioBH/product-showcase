import { describe, it, expect } from 'vitest';
import { mountSuspended } from '@nuxt/test-utils/runtime';

import ProductDetail from './ProductDetails.vue';
import { formatCurrency } from '~/utils/formatters';
import type { Product } from '~/types/index';

describe('ProductDetail', () => {
  const mockProduct: Product = {
    id: 2,
    name: 'Café de Etiopía',
    price: 15.75,
    image: 'https://example.com/etiopia.jpg',
    description: 'Un café con notas florales y cítricas.',
  };

  it('should render all product details correctly', async () => {
    const wrapper = await mountSuspended(ProductDetail, {
      props: {
        product: mockProduct,
      },
    });

    const image = wrapper.find('.product-detail__image-container--image');
    expect(image.exists()).toBe(true);
    expect(image.attributes('src')).toBe(mockProduct.image);
    expect(image.attributes('alt')).toBe(mockProduct.name);

    const name = wrapper.find('.product-detail__info--name');
    expect(name.text()).toBe(mockProduct.name);

    const description = wrapper.find('.product-detail__info--description');
    expect(description.text()).toBe(mockProduct.description);

    const price = wrapper.find('.product-detail__info--price');
    const expectedPrice = formatCurrency(mockProduct.price);
    expect(price.text()).toBe(expectedPrice);
  });
});