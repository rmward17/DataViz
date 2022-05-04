var movieScore = [4.4, 3.3, 5.9, 8.8, 1.2, 5.2, 7.4, 7.5, 7.2, 9.7, 4.2, 6.9];

function mean (userArray){
    var sum = 0;
    for (i = 0; i < userArray.length; i++){
        sum += userArray[i];
    };
    var average = sum / userArray.length;
    return average;
};

function variance (userArray){
    var meanValue = mean(userArray);
    var total = 0;
    for (i = 0; i < userArray.length; i++){
        total += ((userArray[i] - meanValue) ** 2);
        };
    var varianceValue = total / userArray.length;
    return varianceValue;
};

function stanDev (userArray){
    var standardDev = Math.sqrt(variance(userArray));
    return standardDev;
};

console.log(mean(movieScore));
console.log(variance(movieScore));
console.log(stanDev(movieScore));


