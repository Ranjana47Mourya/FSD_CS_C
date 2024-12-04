const mypromise = new Promise((resolve, reject) => {
  let sucess = true; //false
  if (sucess) {
    resolve("data send Successfull");
  } else {
    reject("Data Not Sent");
  }
});
mypromise
  .then((messsge) => console.log(messsge))
  .catch((err) => console.log(err));

//.then() for successfully
//.c
