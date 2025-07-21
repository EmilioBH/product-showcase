<template>
  <div>
    <Head>
      <Title>Products | ProductShowcase</Title>
      <Meta
        name="description"
        content="Browse our amazing collection of products."
      />
    </Head>
    <h1 class="page-title">Our Products</h1>
    <p class="intro-text">
      Start by fetching products from <code>/api/products</code> and display
      them here. You should create a <code>&lt;ProductCard&gt;</code> component
      for each item in the list.
    </p>
    <!-- 
      - Fetch data using useFetch or useAsyncData
      - Handle loading state (e.g., show a spinner)
      - Handle error state (e.g., show an error message)
      - Loop through the products and render a ProductCard for each
    -->
  </div>
</template>

<style lang="scss" scoped>
.page-title {
  margin-bottom: 1rem;
  text-align: center;
  color: var(--color-headings);
}
.intro-text {
  text-align: center;
  margin-bottom: 3rem;
  color: var(--color-text-secondary);
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
}
</style>
