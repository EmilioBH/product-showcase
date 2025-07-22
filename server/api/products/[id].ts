const products = [
    { id: 1, name: 'Eco-Friendly Water Bottle', price: 15.99, image: 'https://placehold.co/300x300/2ECC71/FFFFFF?text=Bottle', description: 'A durable and stylish water bottle made from recycled materials.' },
    { id: 2, name: 'Wireless Noise-Cancelling Headphones', price: 199.99, image: 'https://placehold.co/300x300/3498DB/FFFFFF?text=Headphones', description: 'Immerse yourself in sound with these high-fidelity, noise-cancelling headphones.' },
    { id: 3, name: 'Smart Fitness Tracker', price: 79.50, image: 'https://placehold.co/300x300/E74C3C/FFFFFF?text=Tracker', description: 'Track your steps, heart rate, and sleep patterns with this sleek fitness tracker.' },
    { id: 4, name: 'Portable Espresso Maker', price: 45.00, image: 'https://placehold.co/300x300/9B59B6/FFFFFF?text=Espresso', description: 'Enjoy a perfect shot of espresso anywhere, anytime.' },
];

export default defineEventHandler(async (event) => {
  const id = parseInt(event.context.params.id, 10);
  const product = products.find(p => p.id === id);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 5000));

  if (!product) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Product not found',
    });
  }

  return product;
});
