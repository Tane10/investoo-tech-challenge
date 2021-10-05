const db = require('./src/database/knex')
const knexCleaner = require('knex-cleaner')

jest.setTimeout(60000)

beforeEach(async () =>
  knexCleaner.clean(db, {
    ignoreTables: ['migrations', 'migrations_lock'],
    mode: 'truncate',
  })
)

afterAll(async () => {
  jest.resetAllMocks()
  return db.destroy()
})
