const eqObjects = function(object1, object2) {
  // Check to see if the lengths are same 
  if (typeof obj1 !== "object" || typeof obj2 !== "object") {
    return false;
  }
  if (Object.keys(object1).length !== Object.keys(object2).length) {
              return false;
  } 
  //For all the object 1 keys
    for (const keys of Object.keys(object1)) {

      console.log(`The keys are ${keys}`);
  //IF the first object keys dont equal the second objects keys 
      if (object1[keys] !== object2[keys]) {
  //If both objects are arrays 
        if (Array.isArray(object1[keys]) && Array.isArray(object2[keys])) {
  //If both arrays are equal then it passes 
          if (JSON.stringify(object1[keys]) !== JSON.stringify(object2[keys])) {
            return false;
          } 
        } else {
              return false;
        }
      }
    }
      return true;
};
printResult = (isEqual, actual,expected) => {
  if (isEqual) {
    console.log(`✅:Assertion passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑:Assertion Failed: ${actual} !== ${expected}`);
  }
}
const assertEqObjects = (obj1, obj2) => {
  const isEqual = eqObjects(obj1, obj2)
  printResult(isEqual, JSON.stringify(obj1), JSON.stringify(obj2))
}
assertEqObjects({ a: 2, c: {z: 1}, b: 2 }, { a: 2, c: {z: 1}, b: 2 } )

