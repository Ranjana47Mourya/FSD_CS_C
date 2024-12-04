const fetchdata = new Promise((resolve, reject) => {
  let data = { id: 1, name: "ranjna", age: 22 };
  setTimeout(() => {
    resolve(data);
  }, 3000);
});

fetchdata
  .then((data) => {
    console.log("Id is" + data.id);
    console.log("Id is" + data.name);
    console.log("Id is" + data.age);
  })
  .catch((err) => {
    console.log(err);
  });
