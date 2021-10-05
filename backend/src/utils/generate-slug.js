module.exports = function generateSlug() {
  return Object.values(arguments)
    .join(' ')
    .toLowerCase()
    .replace(/'/g, '')
    .replace(/[^\w\d]/g, ' ')
    .replace(/_/gi, '-')
    .trim()
    .replace(/\s+/g, '-')
}
