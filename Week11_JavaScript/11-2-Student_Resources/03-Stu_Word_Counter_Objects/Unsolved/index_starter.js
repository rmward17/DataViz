// Initialize the function
function wordCounter(userString){
  // Convert string to an array of words
  let wordArray = userString.split(" ");

  // An object to hold word frequency
  let wordFreq = {};
  // Iterate through the array and count the occurrence of each word
  wordArray.forEach(function(word){
    if (!wordFreq[word]) {
      wordFreq[word] = 0; 
    }
    wordFreq[word] += 1;
  }
  );
  return wordFreq;
};
//  Call the function with the string as a parameter.
console.log(wordCounter("I yam what I yam and always will be what I yam"));