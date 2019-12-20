const fs = require('fs')

module.exports = merge = (pjson, path) => {
  return {
    ...pjson,
    dependencies: {
      ...pjson.dependencies,
      ...JSON.parse(fs.readFileSync(path)).dependencies,
    },
  }
}
