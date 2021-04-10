const fs = require('fs')
const cp = require('child_process');

function watch(file) {
  fs.watchFile(file, (event, filename) => {
    if (filename.split('.')[1] === 'js' && event === 'change') {
      cp.fork(filename)
    }
  })
}

watch('node.js')