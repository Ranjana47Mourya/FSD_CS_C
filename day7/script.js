let greet = () => {
  console.log("say Hello");
};
function processuserinput(callback) {
  let name = "join";
  callback(name);
}
processuserinput(greet);
