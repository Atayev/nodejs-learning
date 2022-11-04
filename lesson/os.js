const os = require('os')
const cluster = require('cluster')

// console.log(os.platform() )
// console.log(os.arch())    
// console.log(os.cpus())    
// console.log(os.cpus().length)
// const cpus = os.cpus()

// if (cluster.isMaster) {
//     for (let index = 0; index < cpus.length; index++) {
//         cluster.fork()
//     }
//     cluster.on('exit', (worker) => {
//         console.log(`dead worker ${worker.process.pid}`)
//         cluster.fork()
//     })
// } else {
//     console.log(`worker with pid${process.pid}`)
//     setInterval(() => {
//     console.log(`worker with pid${process.pid}`)
        
//     },5000)
// }
   