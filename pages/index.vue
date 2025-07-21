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
    <div v-if="pending" class="state-container">Cargando productos...</div>
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

const { data: products, pending, error } = await useFetch<Product[]>('/api/products');</script>

<style lang="scss" scoped>
.page-title {
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-headings);
}

.intro-text {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}

.state-container {
  text-align: center;
  padding: 3rem;
  font-size: 1.2rem;

  &.error {
    color: #e74c3c;
  }
}

.product-grid {
  display: grid;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
  
  /* --- Mobile First Styles (Base) --- */
  grid-template-columns: 1fr;
  gap: 1.5rem;

  /* --- Tablet & Desktop Styles --- */
  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 2rem; 
  }
}
</style>
