<template>
  <div>
    <header class="header">
      <div class="container header__container">
        <NuxtLink to="/" class="brand" aria-label="ProductShowcase Home"
          >ProductShowcase</NuxtLink
        >
        <nav aria-label="Main navigation">
          <!-- Add nav links here if needed -->
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
@import "~/styles/mixins";

.header {
  background-color: var(--color-light);
  box-shadow: var(--box-shadow);
  padding: 1rem 0;
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

  &:hover,
  &:focus {
    text-decoration: underline;
  }
}
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}
.main-content {
  padding-top: 2rem;
  padding-bottom: 2rem;
  min-height: calc(100vh - 160px); // Adjust based on header/footer height

  @include tablet {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}
.footer {
  text-align: center;
  padding: 1.5rem 0;
  background-color: var(--color-background-secondary);
  color: var(--color-text-secondary);
  margin-top: auto;
}
</style>
