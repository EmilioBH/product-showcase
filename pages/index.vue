<template>
  <div>
    <Head>
      <Title>Products | ProductShowcase</Title>
      <Meta
        name="description"
        content="Browse our amazing collection of products."
      />
    </Head>
    <h1 class="page-title">Our Products</h1>
    <div v-if="pending" class="state-container">Loading products...</div>
    <div v-else-if="error" class="state-container error">
      Error al cargar los productos: {{ error.message }}
    </div>

    <div v-else-if="products" class="product-grid">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/index';
import ProductCard from '~/components/ProductCard.vue';

const { data: products, pending, error } = await useFetch<Product[]>('/api/products', {lazy: true});
</script>

<style lang="scss" scoped>
@use '~/assets/scss/utils/mixins' as *;

.page-title {
  margin: var(--spacing-unit-xl) 0;
  text-align: center;
  color: var(--color-headings);
}

.intro-text {
  text-align: center;
  margin-bottom: var(--spacing-unit-xxl);
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.state-container {
  text-align: center;
  padding: var(--spacing-unit-xxl);
  font-size: 1.2rem;

  &.error {
    color: var(--color-error);
  }
}

.product-grid {
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit-m);
  
  /* --- Mobile First Styles (Base) --- */
  grid-template-columns: 1fr;
  gap: var(--spacing-unit-l);

  /* --- Tablet & Desktop Styles --- */
  @media (min-width: $breakpoint-md) {
    grid-template-columns: repeat(2, 1fr);
    gap: var(--spacing-unit-xl); 
  }

  /* --- Big Desktop Styles --- */
  @media (min-width: $breakpoint-xl) {
    grid-template-columns: repeat(3, 1fr);
    gap: var(--spacing-unit-xl); 
  }
}
</style>
