// Array of movie ratings
var movieScores = [
  4.4,
  3.3,
  5.9,
  8.8,
  1.2,
  5.2,
  7.4,
  7.5,
  7.2,
  9.7,
  4.2,
  6.9
];

// Starting a rating count
var sum = 0;

// Arrays to hold movie scores
var goodMovieScores = [];
var okMovieScores = [];
var badMovieScores = [];

// Given a list of movie scores, determine how many good, ok and bad movies were there.
// Create a traditional for loop to go through the movieScore list.
for (i =0; i < movieScores.length; i++) {
// Add scores over 7 to the goodMovies array.
  if (movieScores[i] > 7) {
    goodMovieScores.push(movieScores[i]);
  }
// Add scores between 5 and 7 to the okMovies array.
  else if (movieScores[i] > 5 & movieScores[i] <= 7) {
    okMovieScores.push(movieScores[i]);
  }
// Add the rest of the scores to the the badMovies array.
  else {
    badMovieScores.push(movieScores[i]);
  };
  // Also, calculate the average rating for all of the movies.
  sum = sum + movieScores[i];
};
var avg = sum / movieScores.length;
// Finally, print out how many good, ok and bad movies there were and what the overall total score was
console.log(goodMovieScores);
console.log(okMovieScores);
console.log(badMovieScores);
console.log(`There are ${goodMovieScores.length} good movies`);
console.log(`There are ${okMovieScores.length} ok movies`);
console.log(`There are ${badMovieScores.length} bad movies`);
console.log(`The overall total score is ${sum} and the average score is ${avg}`);

// Bonus
// Starting a rating count
var total = 0;

// Arrays to hold movie scores
var goodMovieScores2 = [];
var okMovieScores2 = [];
var badMovieScores2 = [];

movieScores.forEach(function (num){
  if (num > 7) {
    goodMovieScores2.push(num);
  }
// Add scores between 5 and 7 to the okMovies array.
  else if (num > 5 & num <= 7) {
    okMovieScores2.push(num);
  }
// Add the rest of the scores to the the badMovies array.
  else {
    badMovieScores2.push(num);
  };
  // Also, calculate the average rating for all of the movies.
  total = total + num;
});

var average = total / movieScores.length;

// Print to console
console.log("--------------------------------------")
console.log(goodMovieScores2);
console.log(okMovieScores2);
console.log(badMovieScores2);
console.log(`There are ${goodMovieScores2.length} good movies`);
console.log(`There are ${okMovieScores2.length} ok movies`);
console.log(`There are ${badMovieScores2.length} bad movies`);
console.log(`The overall total score is ${total} and the average score is ${average}`);
