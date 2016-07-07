function smallestCommons(arr) {
    arr.sort();
    var newArr = [];

    var minNum = arr[0];
    var maxNum = arr[1];

    //loop from minNum to maxNum 
    for (var i = minNum; i <= maxNum; i++) {
        //pushes numbers in range into new array
        newArr.push(i);
    }
    // goes through each number after the max number to determine if evenly divisble by 
    //each
    var answerFound = false;
    var answer;
    var counter = maxNum;
    // counts up so we can check each number after the max number
    while (answerFound !== true) {
        //arrayItem is each individual number being passed through the newArr
        answerFound = newArr.every(function (arrayItem) {
            return counter % arrayItem === 0;

        });



        counter++;

    }
counter--;
console.log(counter);



    console.log(newArr);

    return counter;
}


smallestCommons([1, 5]);
smallestCommons([5, 1]);
smallestCommons([1, 13]);