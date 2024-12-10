// import FruitController
const { index, store, update, destroy } = require("./FruitController.js");

// membuat fungsi main
const main = () => {
  index();
  store("anggur");
  update(0, "semangka"); 
  destroy(1); 
};

main();
