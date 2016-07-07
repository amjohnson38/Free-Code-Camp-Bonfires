
function sym(passedInArguments) {
    //console.log(arguments);
    //create a variable that will hand the numbers w/o duplicates
    var symmetricSet = [];
    //creat a variable for the arguments passed into the sym function
    var args = arguments;
    for (var i = 0; i < args.length; i++) {
        //filter through each individual array and remove the duplicates
        args[i] = args[i].filter(function (item, pos, self) {
            return self.indexOf(item) == pos;
        });
    }

    for (var i = 0; i < args.length; i++) {
        symmetricSet = compareArr(symmetricSet, args[i]);    
    }

    return symmetricSet;
}

/******************************************************************
 *compares two of the arrays and returns the symmetric set
 */
var compareArr = function (arr1, arr2) {
    var unique = [];
    
    //iterate through array 1
    for (var i = arr1.length - 1; i >= 0; i--) {
        var posFoundArr2 = arr2.indexOf(arr1[i]);
        //if a number in arr1 is not matched up with a number in arr2
        if (posFoundArr2 === -1) {
            //put it into the array named unique
            unique.push(arr1[i]);

        }
        else {
            //if it is matched up, remove it from both arrays
            arr2.splice(posFoundArr2, 1);
            arr1.splice(i, 1);
        }

    }
    //puts the numbers that were not matched from arr2 into the array named unique
    Array.prototype.push.apply(unique, arr2);
    //console.log(unique);
    return unique;
}











//return args;

sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 3], [5, 2, 1, 4]);
sym([1, 2, 5], [2, 3, 5], [3, 4, 5]);
sym([1, 1, 2, 5], [2, 2, 3, 5], [3, 4, 5, 5]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3]);
sym([3, 3, 3, 2, 5], [2, 1, 5, 7], [3, 4, 6, 6], [1, 2, 3], [5, 3, 9, 8], [1]);
