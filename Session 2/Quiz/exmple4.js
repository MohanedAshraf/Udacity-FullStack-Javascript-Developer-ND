const fs = require('fs');

fs.readFile("test.txt" , () => {
    console.log("Hello World(2) - console")
    setTimeout(() => console.log("Hello World(2) - setTimeout 1") , 3000)
    setTimeout(() => console.log("Hello World(2) - setTimeout 2") , 0)
    setImmediate(() => {
        console.log("Hello World(2) - immediate")
    })

    process.nextTick(() => {
        console.log("Hello World(2) - nexttick");
      });
})

setTimeout(() => console.log("Hello World(1) - setTimeout 1") , 3000)
setTimeout(() => console.log("Hello World(1) - setTimeout 2") , 0)
setImmediate(() => {
    console.log("Hello World(1) - immediate")
  })

process.nextTick(() => {
    console.log("Hello World(1) - nexttick");
  });
