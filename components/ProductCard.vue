<template>
  <article class="product-card">
    <img class="product-card__image" :src="product.image" :alt="product.name" />
    <div class="product-card__content">
      <h2 class="product-card__name">{{ product.name }}</h2>
      <p class="product-card__price">{{ formatCurrency(product.price) }}</p>
    </div>
  </article>
</template>

<script setup lang="ts">
import type { Product } from '~/types/index.ts';

defineProps<{
  product: Product;
}>();

</script>

<style lang="scss" scoped>
.product-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  }

  &__image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  &__content {
    padding: 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__name {
    font-size: 1.1rem;
    font-weight: 600;
    margin: 0 0 0.5rem;
    color: var(--color-headings);
  }

  &__price {
    font-size: 1.2rem;
    font-weight: bold;
    color: var(--color-primary);
    margin: 0;
    text-align: right;
  }
}
</style>