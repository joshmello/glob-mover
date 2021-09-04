# glob-mover

NodeJS library used to move files and directories using glob

## Copy contents of src/myapp/ directory to dest/mynewappp/ directory

```
const globMover = require('glob-mover');

globMover('src/myapp/*', 'dest/mynewappp/')
  .then(() => 'Content moved successfully!');
  .catch(console.error);
```