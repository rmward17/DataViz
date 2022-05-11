// An unsorted array
numArray = [9.9, 6.1, 17.1, 22.7, 4.6, 8.7, 7.2];

// Sort the array in descending order and assign the results to a variable
sortedNumArray = numArray.sort((a,b) => b - a);

// Print the results to the console
console.log(sortedNumArray);
// Sort the array in descending order using an arrow function
// and assign the results to a variable and print to the console


// Reverse the array order
revSortedArray = sortedNumArray.reverse();
console.log(revSortedArray);

// Sort the array in ascending order using an arrow function
sortedAsc = numArray.sort((a,b) => a - b);
console.log(sortedAsc);
// Slice the first five elements of the sortedAscending array, assign to a variable
sliced = sortedAsc.slice(0,5);
console.log(sliced);