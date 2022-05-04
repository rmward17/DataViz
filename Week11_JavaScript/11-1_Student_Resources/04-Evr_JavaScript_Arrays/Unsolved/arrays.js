// A JavaScript array is much like a Python list
// Here, start with a blank array
let testArray = [1,2,3,4,5];

// Display the array in console
console.log(testArray);

// Use indexing to access an array item
console.log(testArray[2]);

// Use push() to append an item to an array
testArray.push(6);
console.log(testArray);
// Use slice() to return selected items of an array
console.log(testArray.slice(0,3));

// Return the first three items of an array
console.log(testArray.slice(0,3));
// Return the second and third items of an array
console.log(testArray.slice(1,3));



// Use join() to return items of an array into a single string
console.log(testArray.join(" "));

// A JavaScript string
testString = testArray.join(" ");

// Use indexing to access a string character
console.log(testArray[2]);

// Split a string into an array of substrings
// Here, split the string where spaces are found
console.log(testString.split(" "));