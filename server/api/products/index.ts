const products = [
  { id: 1, name: 'Eco-Friendly Water Bottle', price: 15.99, image: 'https://placehold.co/300x300/2ECC71/FFFFFF?text=Bottle' },
  { id: 2, name: 'Wireless Noise-Cancelling Headphones', price: 199.99, image: 'https://placehold.co/300x300/3498DB/FFFFFF?text=Headphones' },
  { id: 3, name: 'Smart Fitness Tracker', price: 79.50, image: 'https://placehold.co/300x300/E74C3C/FFFFFF?text=Tracker' },
  { id: 4, name: 'Portable Espresso Maker', price: 45.00, image: 'https://placehold.co/300x300/9B59B6/FFFFFF?text=Espresso' },
];

export default defineEventHandler(async (event) => {
  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 500));
  return products;
});
