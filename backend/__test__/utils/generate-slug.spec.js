const generateSlug = require('../../src/utils/generate-slug')

test('Generates slugs correctly', () => {
  expect(generateSlug('Test Name')).toBe('test-name')
  expect(generateSlug('Test Name', 'crypto')).toBe('test-name-crypto')
  expect(generateSlug('Lol - what?')).toBe('lol-what')
  expect(generateSlug('Lol', 'what?')).toBe('lol-what')
  expect(generateSlug('ETORO.')).toBe('etoro')
  expect(generateSlug('12/34 Partner')).toBe('12-34-partner')
  expect(generateSlug('12/34', 'Partner')).toBe('12-34-partner')
  expect(generateSlug('test / test')).toBe('test-test')
})
