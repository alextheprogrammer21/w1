const data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  },
};

const biggestfollower = () => {
  let arr = [];
  let finalval = 0;
  let dataKeys = Object.keys(data);
  for (const element of dataKeys) {
    arr.push(data[element]["follows"].length); 
  }

  for (let i = 0; i < arr.length; i++) {
    // if (arr[i] < arr[finalval]) {
    //   finalval = i - 1;
    // }
    if(arr[i] > arr[finalval]) {
      finalval = i;
    }
  }

  
  return data[dataKeys[finalval]].name;
}

const mostPopular = () => {
  const mostFollowed = null;
  let arr = []; 

    for (const element of Object.keys(data)) {
      
    }
    return data[mostFollowed].name;
}

// console.log(biggestfollower());
console.log(mostPopular());

/*
what happens if you use a variable that doesn't otherwise exist, without doing `let foo` or `const foo`
Can you list out all the keys of an object without including the functions?
*/