/**
 * Formats a number as a currency, using the user's browser locale if available.
 * @param price The number to format.
 * @returns The formatted price as a string.
 */
export const formatCurrency = (price: number): string => {
  const locale = import.meta.client ? navigator.language : 'es-ES';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: 'EUR',
  }).format(price);
};