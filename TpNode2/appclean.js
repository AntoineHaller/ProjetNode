var fs = require('fs')
fs.writeFile('./log/log.log', '', function(){console.log('log erased.')})