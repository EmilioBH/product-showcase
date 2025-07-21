
<template>
  <div class="product-detail">
    <div class="product-detail__image-container">
      <img :src="product.image" :alt="product.name" class="product-detail__image" />
    </div>
    <div class="product-detail__info">
      <h1 class="product-detail__name">{{ product.name }}</h1>
      <p class="product-detail__description">{{ product.description }}</p>
      <p class="product-detail__price">{{ formatCurrency(product.price) }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/index';

defineProps<{
  product: Product;
}>();
</script>

<style lang="scss" scoped>
.product-detail {
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 2rem auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }

  &__image {
    width: 100%;
    border-radius: 8px;
  }

  &__name {
    font-size: 2.5rem;
    margin-bottom: 1rem;
  }

  &__description {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 2rem;
  }
  
  &__price {
    font-size: 2rem;
    font-weight: bold;
    color: var(--color-primary, #3498db);
  }
}
</style>