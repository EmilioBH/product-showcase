<template>
  <div class="error-page">
    <div class="error-content">
      <p class="error-status-code">{{ error.statusCode }}</p>
      <h1 class="error-title">Page Not Found</h1>
      <p class="error-description">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
      <button class="error-button" @click="handleClearError">
        Go Back Home
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  error: {
    statusCode: number;
    statusMessage: string;
    message: string;
  };
}>();

const handleClearError = () => {
  clearError({ redirect: '/' });
};
</script>

<style lang="scss" scoped>
.error-page {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  min-height: 80vh;
  font-family: var(--font-family-main);
}

.error-status-code {
  font-size: 8rem;
  font-weight: 800;
  color: var(--color-primary, #3498db);
  line-height: 1;
}

.error-title {
  font-size: 2rem;
  font-weight: 600;
  margin: 1rem 0;
}

.error-description {
  font-size: 1.1rem;
  color: var(--color-text-secondary);
  margin-bottom: 2.5rem;
}

.error-button {
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  font-weight: 600;
  color: #fff;
  background-color: var(--color-primary, #3498db);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #2980b9;
  }
}
</style>