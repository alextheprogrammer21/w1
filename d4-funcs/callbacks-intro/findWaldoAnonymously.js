// The second argument/parameter is expected to be a (callback) function

const actionWhenFound = function(index) {
  console.log(`Found Waldo at ${index}`);
}

const findWaldo = (["Alice", "Bob", "Waldo", "Winston"]);

findWaldo.forEach((name,index) => {
  if (name === "Waldo") {
    actionWhenFound(index);
  }
})