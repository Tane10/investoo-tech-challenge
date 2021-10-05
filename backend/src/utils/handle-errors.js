module.exports = (func) => async (req, res, next) => {
  try {
    await func(req, res, next)
  } catch (err) {
    res.status(500).send({ error: err.message })
  }
}
