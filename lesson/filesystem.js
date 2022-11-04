const fs = require('fs')
const { resolve } = require('path')
const path = require('path')

// fs.mkdirSync(path.resolve(__dirname, 'dir4', 'dir2', 'dir3'), { recursive: true })
// console.log('start')
// fs.mkdir(path.resolve(__dirname, 'dir4'), (err) => {
//     if (err) {
//         console.log(err)
//         return;
//     }
//     console.log('created ')
// })
// console.log('end')

// fs.rmdir(path.resolve(__dirname, 'dir4'), (err) => {
//     if (err) {
//         throw err
//     }
// })

// fs.writeFile(path.resolve(__dirname, 'test.txt'),'somethingfasdfjasd', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('file writed')
// })


// fs.appendFile(path.resolve(__dirname, 'test.txt'),' dsafkjsda', (err) => {
//     if (err) {
//         throw err;
//     }
//     console.log('file writed')
// })


const writeFileAsync = async (path,data) => {
    return new Promise((resolve, reject) => fs.writeFile(path,data,(err) => {
        if (err) {
            return reject(err.message)
        }
        resolve()
    }))
}

// writeFileAsync(path.resolve(__dirname, 'test2.txt'), 'salam')
//     .then(() =>
// appendFileAsync(path.resolve(__dirname,'test2.txt'),'aleykum salam')
// )
// .then(() =>
// appendFileAsync(path.resolve(__dirname,'test2.txt'),'netersen')
// )
// .then(() =>
// appendFileAsync(path.resolve(__dirname,'test2.txt'),'shukur')
// )
// .then(()=>readFileAsync(path.resolve(__dirname,'test2.txt'))).then(data=>console.log(data))
// .catch(err=>console.log(err))

// const appendFileAsync = async (path,data) => {
//     return new Promise((resolve, reject) => fs.appendFile(path,data, (err) => {
//         if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }))
// }
const readFileAsync = async (path) => {
    return new Promise((resolve, reject) => fs.readFile(path, { encoding: 'utf-8' },(err,data)=> {
    if (err) {
            return reject(err.message)
        }
        resolve(data)
    }),)
}
// const removeFileAsync = async (path) => {
//     return new Promise((resolve, reject) => fs.rm(path,(err)=> {
//     if (err) {
//             return reject(err.message)
//         }
//         resolve()
//     }),)
// }
// removeFileAsync(path.resolve(__dirname, 'test2.txt'))
// .then(()=>console.log('deleted file'))

const text = process.env.TEXT || ''

writeFileAsync(path.resolve(__dirname, 'test.txt'), text)
    .then(() => readFileAsync(path.resolve(__dirname, 'text.txt')))
    .then(data => data.split(``).length)
    .then(count => writeFileAsync(path.resolve(__dirname, 'count.txt'), `sayilan sozler ${count}`))
