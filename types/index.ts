// types/index.ts

// Defining a clear type for our Product object helps with
// type safety and autocompletion throughout the application.

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
}
