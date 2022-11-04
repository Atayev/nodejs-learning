const fs = require('fs')
const path = require('path')

// const stream = fs.createReadStream(path.resolve(__dirname, 'test.txt'),{encoding:'utf-8'
// })

// stream.on('data', (chunk) => {
//     console.log(chunk)
// })

// const writeableStream = fs.createWriteStream(path.resolve(__dirname, 'test2.txt'))
// stream maks razmer 64kb
// for (let i = 0; i < 20; i++) {
//     writeableStream.write(i+`\n`)
// }
// writeableStream.end()
// const http = require('http')

// http.createServer((req, res)=> {
//     //req - readable stream
//     //res - writable stream

//     const stream = fs.createReadStream(path.resolve(__dirname, 'test2.txt'))
//     stream.pipe(res)
// })
