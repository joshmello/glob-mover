const glob = require('glob-promise');
const { join, basename } = require('path');
const promisify = require('es6-promisify');
const mv = promisify(require('mv'));

const globMover = async function (globSrcPattern, destDir, globOptions) {
  let copiedPaths = null;

  const paths = await glob(globSrcPattern, globOptions);
  const params = paths.map((path) => {
    copiedPaths = paths;
    return mv(path, join(destDir, basename(path)), { mkdirp: true });
  });
  await Promise.all(params);
  return copiedPaths;
};

module.exports = globMover