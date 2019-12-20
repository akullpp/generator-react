module.exports = dependencies =>
  Object.keys(dependencies)
    .sort()
    .reduce(
      (acc, key) => ({
        ...acc,
        [key]: dependencies[key],
      }),
      {},
    )
