function pairwise(arr, arg) {
var sum = 0;
    //loop through the array to check each number starting with the element in the 0 index
    for (var i = 0; i < arr.length - 1; i++) {
   // loop through the array only for the elements that have towards the end of the the array.
        for (var j = i + 1; j < arr.length; j++) {
            //the numbers at arr[i] and arr[j] are less than the argument and they add together to equal the argument use them.
            if (arr[i] <= arg && arr[j] <= arg && arr[i] + arr[j] == arg) {
                // add the indexes together to get the sum.
                sum += i + j; 
                //setting these to NaN changes their values so they are not rechecked or duplicated
                arr [i] = arr[j] = NaN;
            }
        }
    }
    console.log (sum);
    return sum;
} 