setTimeout(() => console.log("Hello World - setTimeout 1") , 3000)
setTimeout(() => console.log("Hello World - setTimeout 2") , 0)
setImmediate(() => {
    console.log("Hello World - immediate")
  })

process.nextTick(() => {
    console.log("Hello World - nexttick");
  });
