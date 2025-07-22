# Product Showcase: A Product Display with Nuxt 3

This project is a technical test that simulates a small e-commerce site, built to demonstrate **Frontend development skills** with modern technologies and **Server-Side Rendering (SSR)**. This repository contains a web application that presents a product listing and allows the user to navigate to dynamically generated detail pages. The main goal is to showcase a **clean, scalable, and accessible implementation** using the **Nuxt 3** framework.

---

## ✨ Key Features

* **Server-Side Rendering (SSR):** Dynamic content optimized for SEO thanks to Nuxt 3.
* **Dynamic Product Pages:** Routes generated on the fly for each product.
* **Responsive Design:** Interface adaptable to different screen sizes.
* **Accessibility:** Developed following **WCAG 2.1 Level AA** standards to ensure usability for the widest possible audience.
* **Code Quality:** Clean and maintainable code with **ESLint** and a strict **TypeScript** configuration.
* **Robust Testing:** Unit and integration test coverage with **Vitest**, and End-to-End tests with **Playwright**.

---

## 🛠️ Technologies Used

This project is built with a modern and efficient technology stack:

* **Framework:** Nuxt 3
* **Language:** TypeScript
* **Styles:** SASS (SCSS syntax)
* **Unit/Integration Testing:** Vitest and Vue Test Utils
* **End-to-End (E2E) Testing:** Playwright
* **Linting:** ESLint
* **Accessibility Standards:** WCAG 2.1 AA

---

## 🚀 Installation and Setup

To run this project in your local environment, follow these steps.

### Prerequisites

Make sure you have the following tools installed:

* **Node.js:** v20.19.2 or a compatible v20.x version.
* **pnpm:** v10.13.1 or higher. If you don't have it, you can install it with `npm install -g pnpm`.

### Installation Steps

1.  **Clone the repository:**

    ```bash
    git clone git@github.com:EmilioBH/product-showcase.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd product-showcase
    ```

3.  **Install dependencies:**

    ```bash
    pnpm install
    ```

    (This command will read the `pnpm-lock.yaml` file to install the exact package versions, ensuring a consistent installation.)

### Available Scripts

You can use the following pnpm scripts to interact with the project:

* **Start in development mode:**

    ```bash
    pnpm dev
    ```

    Starts the application at `http://localhost:3000` with Hot-Reloading.

* **Run unit tests:**

    ```bash
    pnpm test
    ```

    Launches Vitest to run all unit and integration tests.

* **Check and fix code (Linting):**

    ```bash
    pnpm lint
    ```

    Uses ESLint to analyze the code for errors and style issues, attempting to fix them automatically.

* **Build for production:**

    ```bash
    pnpm build
    ```

    Compiles and optimizes the application for production deployment.

---

## 👤 Author

* **Name/Alias:** EmilioBH
* **GitHub:** [@EmilioBH](https://github.com/EmilioBH)

---