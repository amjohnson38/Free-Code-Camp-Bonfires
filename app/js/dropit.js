/*function dropElements(arr, func) {
    var i = 0;
    //looping through the array when the array is going to either be cut short or keep growing.
    /*while (arr[i] !== undefined) {

        if (func(arr[i]) === false) {
            arr.shift();

        } else {
            break;
        }
    }*/
/* while ((arr[0] !==undefined)&&(func(arr[0]) ===false)){
     arr.shift();
 }
 console.log(arr);
 return arr;
}

dropElements([1, 2, 3], function (n) { return n < 3; });
dropElements([1, 2, 3, 4], function (n) { return n >= 3; })
dropElements([0, 1, 0, 1], function (n) { return n === 1; })
dropElements([1, 2, 3, 4], function (n) { return n > 5; })
dropElements([1, 2, 3, 7, 4], function (n) { return n > 3; })
dropElements([1, 2, 3, 9, 2], function (n) { return n > 2; })*/
/*********************************************************************************************
 * *******************************************************************************************
 */
/*function binaryAgent(str) {
    newArr=str.split(" ");
    binStr=[];
    console.log(newArr);
    for(var i=0; i<newArr.length;i++){
    binStr.push(String.fromCharCode(parseInt(newArr[i],2)));
    finalStr=binStr.join("");
        
    }

console.log(finalStr);
  
  return finalStr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");*/

function addTogether(x) {
    //turns the arguments into arrays
    var args = Array.prototype.slice.call(arguments);
    // console.log(args.length);

// one argument is being passed & the addition is different because we are returning a function
    if (args.length === 1) {
        //check x to see if it's a number
        if (typeof x !== "number") {
            return undefined;
        }

//take the second argument group passed is y
        return function (y) {
            //check y to see if it's a number
            if (typeof y !== "number") {
                return undefined;
            }
            console.log(x + y);

            //if x and y are both numbers; find the sum
            return x + y;
        };



    } else {
        //if two arguments are being passed, check the first and second item in args.length to see if they are numbers
        if (typeof args[0] !== "number" || typeof args[1] !== "number") {
            return undefined;
        }
        //if they are both numbers, add them together.
        console.log(args[0] + args[1]);
        return args[0] + args[1];
    }

}

addTogether(2, 3);
addTogether(2)(3);
addTogether("http://bit.ly");
addTogether(2, "3");
addTogether(2)([3]);





var add5 = function (y) {
    return 5 + y;
};
var add10 = function (y) {
    return 10 + y;
};
add5(2)