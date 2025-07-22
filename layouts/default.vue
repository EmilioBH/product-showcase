<template>
  <div class="layout-wrapper">
    <header class="header">
      <div class="container header__container">
        <NuxtLink to="/" class="brand" aria-label="ProductShowcase Home">
          ProductShowcase
        </NuxtLink>
        <nav aria-label="Main navigation">
        </nav>
      </div>
    </header>

    <main class="container main-content">
      <slot />
    </main>

    <footer class="footer">
      <div class="container">
        <p>&copy; 2025 ProductShowcase Inc.</p>
      </div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
@use '~/assets/scss/utils/mixins' as *;

.layout-wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex-grow: 1;
  padding-top: var(--spacing-unit-l);
  padding-bottom: var(--spacing-unit-l);

  @include tablet {
    padding-top: var(--spacing-unit-xl);
    padding-bottom: var(--spacing-unit-xl);
  }
}

.header {
  background-color: var(--color-background-secondary);
  box-shadow: var(--box-shadow);
  padding: var(--spacing-unit-m) 0;
  border-bottom: 1px solid var(--color-border);

  &__container {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.brand {
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: var(--color-primary);

  &:hover {
    text-decoration: underline;
  }
  
  @include focus-visible-ring;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 var(--spacing-unit-m);
}

.footer {
  text-align: center;
  padding: calc(var(--spacing-unit-m) * 1.5) 0;
  background-color: var(--color-background-secondary);
  color: var(--color-text-secondary);
  margin-top: var(--spacing-unit-xxl);
}
</style>