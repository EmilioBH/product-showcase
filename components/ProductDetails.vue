
<template>
  <div class="product-detail">
    <div class="product-detail__image-container">
      <img
        :src="product.image"
        :alt="product.name"
        class="product-detail__image-container--image"
      >
    </div >
    <div class="product-detail__info">
      <h1 class="product-detail__info--name">
        {{ product.name }}
      </h1>
      <p class="product-detail__info--description">
        {{ product.description }}
      </p>
      <p class="product-detail__info--price">
        {{ formatCurrency(product.price) }}
      </p>
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
@use '~/assets/scss/utils/mixins' as *;

.product-detail {
  display: grid;
  gap: var(--spacing-unit-l);
  max-width: 900px;
  margin: var(--spacing-unit-l) auto;
  padding: 0 var(--spacing-unit-xl);

  @include tablet {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-unit-xxl);
    align-items: center;
  }

  &__image-container {
    &--image {
      width: 100%;
      border-radius: var(--border-radius);
    }
  }

  &__info {

    &--name {
      font-size: 2.5rem;
      margin-bottom: var(--spacing-unit-m);
      color: var(--color-headings);
    }

    &--description {
      font-size: 1.1rem;
      line-height: var(--line-height-base);
      color: var(--color-text-secondary);
      margin-bottom: var(--spacing-unit-l);
    }
    
    &--price {
      font-size: 2rem;
      font-weight: bold;
      color: var(--color-primary);
    }
  }
}
</style>