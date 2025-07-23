<template>
  <NuxtLink
    :to="`/products/${product.id}`"
    class="product-card-link"
    :aria-label="`Go to the ${product.name} detail page`"
  >
    <article class="product-card">
      <img
        class="product-card__image"
        :src="product.image"
        :alt="product.name"
      >
      <div class="product-card__content">
        <h2 class="product-card__name">
          {{ product.name }}
        </h2>
        <p class="product-card__price">
          {{ formatCurrency(product.price) }}
        </p>
      </div>
    </article>
  </NuxtLink>  
</template>

<script setup lang="ts">
import type { Product } from '~/types/index.ts';

defineProps<{
  product: Product;
}>();

</script>

<style lang="scss" scoped>
@use '~/assets/scss/utils/mixins' as *;

.product-card-link {
  text-decoration: none;
  color: inherit;
  display: block;
  border-radius: var(--border-radius);

  // Add mixin to do an accesible focus
  @include focus-visible-ring;
}

.product-card {
  border: 1px solid var(--color-border);
  border-radius: var(--border-radius);
  background-color: var(--color-light);

  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  transition: transform 0.2s ease-in-out, box-shadow 0.2s ease-in-out;

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--box-shadow);
  }

  &__image {
    width: 100%;
    aspect-ratio: 1 / 1;
    object-fit: cover;
  }

  &__content {
    padding: var(--spacing-unit-s);
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }

  &__name {
    font-size: calc(var(--spacing-unit-m)*1.5);
    font-weight: 600;
    margin: 0 0 var(--spacing-unit-xs);
    color: var(--color-headings);
  }

  &__price {
    font-size: var(--spacing-unit-l);
    font-weight: bold;
    color: var(--color-primary);
    margin: 0;
    text-align: right;
  }
}
</style>