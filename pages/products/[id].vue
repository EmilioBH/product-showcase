<template>
  <div class="page-container">
    <NuxtLink to="/" aria-label="Come back to the product list" class="back-link">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
        </svg>
    </NuxtLink>  
    <div>
        <div v-if="pending">Loading products...</div>
        <div v-else-if="product">
        <ProductDetail :product="product" />
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Product } from '~/types/index';
import ProductDetail from '~/components/ProductDetails.vue';

const route = useRoute();
const id = route.params.id;

const { data: product, pending, error } = await useFetch<Product>(`/api/products/${id}`);

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
}

.back-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem;
  border-radius: 50%;
  transition: background-color 0.2s ease-in-out;
  
  svg {
    width: 24px;
    height: 24px;
  }

  &:hover {
    background-color: #f0f0f0;
  }
}
</style>