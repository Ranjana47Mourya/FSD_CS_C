console.log("Start");
setTimeout(() => {
  console.log("Fisrt Task Complited");
  setTimeout(() => {
    console.log("Second Task Complited");
    setTimeout(() => {
      console.log("Third Task Completed");
    }, 3000);
  }, 2000);
}, 1000);
console.log("end");
