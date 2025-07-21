<template>
  <div class="product-detail-skeleton">
    <div class="product-detail-skeleton__image-container">
      <div class="skeleton-box skeleton-image"></div>
    </div>
    <div class="product-detail-skeleton__info">
      <div class="skeleton-box skeleton-title"></div>
      <div class="skeleton-box skeleton-text"></div>
      <div class="skeleton-box skeleton-text short"></div>
      <div class="skeleton-box skeleton-price"></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product-detail-skeleton {
  display: grid;
  gap: 2rem;
  max-width: 900px;
  margin: 2rem auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
    align-items: center;
  }
}

.skeleton-image {
  width: 100%;
  aspect-ratio: 1 / 1;
}

.skeleton-title {
  height: 2.5rem;
  width: 70%;
  margin-bottom: 1.5rem;
}

.skeleton-text {
  height: 1.1rem;
  width: 100%;
  margin-bottom: 1rem;

  &.short {
    width: 80%;
  }
}

.skeleton-price {
  height: 2rem;
  width: 40%;
  margin-top: 2rem;
}
</style>