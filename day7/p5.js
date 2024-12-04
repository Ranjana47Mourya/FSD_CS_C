const fetchdata = new Promise((resolve, reject) => {
  let data = [
    { id: 1, name: "ranjna", age: 22 },
    { id: 2, name: "Shivam", age: 18 },
    { id: 3, name: "Nandani", age: 16 },
    { id: 4, name: "Shubham", age: 26 },
  ];
  setTimeout(() => {
    resolve(data);
  }, 3000);
});

fetchdata
  .then((data) => {
    data.forEach((element) => {
      console.log(
        "Name is " +
          element.name +
          "age is" +
          element.age +
          "Id is" +
          element.id
      );

      // console.log("Name is " + element.name);
      // console.log("age is " + element.age);
      // console.log("Id is " + element.id);
    });
  })
  .catch((err) => {
    console.log(err);
  });
