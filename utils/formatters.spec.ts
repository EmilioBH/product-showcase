import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { formatCurrency } from './formatters';

describe('formatCurrency', () => {
  describe('when on the server side (no navigator)', () => {
    beforeEach(() => {
      vi.stubGlobal('navigator', undefined);
    });

    afterEach(() => {
      vi.unstubAllGlobals();
    });

    it('should format using es-ES locale', () => {
      const expected = '100,00\xA0€';
      expect(formatCurrency(100)).toBe(expected);
    });
  });

  describe('when on the client side (navigator exists)', () => {
    beforeEach(() => {
      vi.stubGlobal('navigator', { language: 'en-US' });
    });

    afterEach(() => {
      vi.unstubAllGlobals();
    });
    
    it('should use navigator language and format correctly', () => {
      const expected = '€100.00';
      expect(formatCurrency(100)).toBe(expected);
    });
  });
});