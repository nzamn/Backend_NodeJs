// import data fruits
const fruits = require("./fruit.js");

// membuat fungsi index
const index = () => {
  for (const fruit of fruits) {
    console.log(fruit);
  }
};

// membuat fungsi store
const store = (name) => {
  fruits.push(name);
  index();
};

// membuat fungsi update
const update = (indexToUpdate, newName) => {
  if (indexToUpdate >= 0 && indexToUpdate < fruits.length) {
    fruits[indexToUpdate] = newName;
    console.log(`Data di indeks ${indexToUpdate} telah diperbarui menjadi '${newName}'.`);
    index();
  } else {
    console.log("Indeks tidak valid.");
  }
};

// membuat fungsi destroy
const destroy = (indexToDelete) => {
  if (indexToDelete >= 0 && indexToDelete < fruits.length) {
    const removedFruit = fruits.splice(indexToDelete, 1);
    console.log(`Data '${removedFruit}' di indeks ${indexToDelete} telah dihapus.`);
    index();
  } else {
    console.log("Indeks tidak valid.");
  }
};

// export method index, store, update, dan destroy
module.exports = { index, store, update, destroy };
