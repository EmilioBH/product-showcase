<template>
  <div class="detail-skeleton">
    <div class="skeleton-box detail-skeleton__image-container" />
    <div class="detail-skeleton__info">
      <div class="skeleton-box detail-skeleton__info--title" />
      <div class="skeleton-box detail-skeleton__info--text" />
      <div class="skeleton-box detail-skeleton__info--text short" />
      <div class="skeleton-box detail-skeleton__info--price" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/utils/mixins' as *;

.detail-skeleton {
  display: grid;
  gap: var(--spacing-unit-l);
  width: 900px;
  margin: var(--spacing-unit-l) auto;

  @include tablet {
    grid-template-columns: 1fr 1fr;
    gap: var(--spacing-unit-xxl);
    align-items: center;
  }

  &__image-container {
    width: 100%;
    aspect-ratio: 1 / 1;
  }
  
  &__info {
    &--title {
      height: 2.5rem;
      width: 70%;
      margin-bottom: calc(var(--spacing-unit-m) * 1.5);
    }

    &--text {
      height: 1.1rem;
      width: 100%;
      margin-bottom: var(--spacing-unit-m);

      &.short {
        width: 80%;
      }
    }

    &--price {
      height: 2rem;
      width: 40%;
      margin-top: var(--spacing-unit-l);
    }
  }
}
</style>