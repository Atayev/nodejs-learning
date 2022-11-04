const path = require('path')


console.log('spesific path',path.join(__dirname, '..', '..', '..'))
console.log('all path', path.resolve('first'))

const siteUrl = 'http://localhost:8800/users?id=5'

const url = new URL(siteUrl)
console.log(url)