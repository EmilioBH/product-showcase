# Frontend Developer Technical Test

Welcome to our technical test! This exercise is designed to assess your skills in building a modern web application using Nuxt.js, TypeScript, and other best practices. Please read the instructions carefully.

## The Goal

Your task is to build a small, accessible, and well-tested "Product Showcase" application. The application will fetch a list of products from a mock API and display them to the user. The user should be able to view the list of products and see a detail page for each product.

## Core Technologies

- **Framework:** Nuxt 3
- **Language:** TypeScript
- **Styling:** SASS (SCSS syntax)
- **Testing:** Vitest and Vue Test Utils
- **Accessibility:** WCAG 2.1 AA standards

## Project Requirements

### 1. Project Setup

- Clone the provided boilerplate to get started.
- Install the dependencies using `pnpm install`.
- The boilerplate is a standard Nuxt 3 project with TypeScript, SASS, and testing pre-configured.

### 2. Data Fetching

- We have provided a mock API endpoint within the boilerplate in the `server/api` directory.
- The endpoint is available at `/api/products`. It returns a list of products.
- A second endpoint, `/api/products/[id]`, returns the details for a single product.
- Use Nuxt's data fetching composables (`useFetch` or `useAsyncData`) to retrieve the data.
- Implement proper loading and error states for the data fetching operations.

### 3. Page & Component Structure

#### a. Product List Page (`/`)

- This page should display a grid or list of all products.
- Each product in the list should be a reusable component (`<ProductCard />`).
- The `ProductCard` should display the product's image, name, and price.
- Clicking on a `ProductCard` should navigate the user to the corresponding product detail page.

#### b. Product Detail Page (`/products/[id]`)

- This page should display all the details for a single product: image, name, price, and description.
- Create a dedicated component, e.g., `<ProductDetail />`, to display this information.
- This page should handle cases where a product with the given ID does not exist, displaying a user-friendly "Product not found" message.

### 4. Styling with SASS

- Use SASS for all styling. The boilerplate is already configured to use `.scss` files.
- Structure your styles logically. You can use a combination of scoped styles within your Vue components and global styles.
- Create a `styles` or `assets/scss` directory for global styles, variables, mixins, etc.
- The design should be clean, modern, and responsive, ensuring it looks good on mobile, tablet, and desktop screens.

### 5. Testing

- Write unit tests for your primary components (`ProductCard`, `ProductDetail`).
- Tests should cover:
  - Correct rendering of props.
  - Conditional rendering (e.g., what happens if a prop is missing).
  - User interactions (e.g., simulating a click).
- Aim for meaningful test coverage. We value quality of tests over quantity.

### 6. Accessibility (A11y)

- Ensure the application is accessible.
- **Semantic HTML:** Use appropriate HTML tags (`<nav>`, `<main>`, `<article>`, `<h1>`, etc.).
- **Images:** All images must have descriptive `alt` attributes.
- **Keyboard Navigation:** The entire application should be navigable and usable with only a keyboard.
- **Focus Management:** Ensure focus states are clearly visible.
- **ARIA Roles:** Use ARIA roles and attributes where necessary, but prioritize using semantic HTML first.

## Evaluation Criteria

We will be evaluating your submission based on the following criteria:

- **Correctness:** Does the application meet all the requirements?
- **Code Quality:** Is the code clean, well-structured, and easy to understand? Is TypeScript used effectively to ensure type safety?
- **Component Architecture:** Are components well-designed, reusable, and follow best practices?
- **Testing:** Are the tests meaningful and well-written? Do they cover important cases?
- **Accessibility:** Is the application accessible and usable for everyone?
- **Git History:** Your commit history should be clean and descriptive.

## Submission

Please create a new repository on a platform like GitHub or GitLab and push your code. When you are finished, send us the link to the repository.

Good luck! We look forward to seeing your work.
