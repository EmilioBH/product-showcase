<template>
  <div class="page-container">
    <NuxtLink
      to="/"
      class="back-link"
      aria-label="Come back to the product list"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="3"
        stroke="currentColor"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
        />
      </svg>
    </NuxtLink>  
    <div>
      <div v-if="pending">
        <ProductDetailSkeleton />
      </div>
      <div v-else-if="product">
        <ProductDetail :product="product" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/index';
import ProductDetail from '~/components/ProductDetails.vue';
import ProductDetailSkeleton from '~/components/ProductDetailSkeleton.vue';

const route = useRoute();
const id = route.params.id;
const url = `/api/products/${id}`;

const { data: product, pending, error } = await useFetch<Product>(url, { lazy: true });

if (error.value) {
  throw createError({ 
    statusCode: 404, 
    statusMessage: 'Product Not Found', 
    fatal: true 
  });
}

useHead({
  title: () => product.value?.name || 'Product Detail',
});
</script>

<style lang="scss" scoped>
.page-container {
  max-width: 940px;
  margin: 0 auto;
  padding: var(--spacing-unit-m);
}

.back-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  
  svg {
    color: var(--color-primary);
    width: var(--spacing-unit-l);
    height: var(--spacing-unit-l);
  }

  &:hover {
    background-color: var(--color-background-secondary);
  }
}
</style>