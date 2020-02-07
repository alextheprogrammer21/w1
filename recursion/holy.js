const arrayPrint = (arr) => {
  let sum = 0;
  arr.forEach(element => {
    if(Array.isArray(element)) {
      sum += arrayPrint(element);
    } else {
      sum += element;
    }
  });
  return sum;
}

console.log(arrayPrint([1,[2,3],4,[5]]));