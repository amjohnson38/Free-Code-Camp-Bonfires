function updateInventory(arr1, arr2) {
    // All inventory must be accounted for or you're fired!
    //variables created to represent arr1 and arr2
    var currentInv = arr1;
    var newInventory = arr2;
//convert currentInv into a string to compare with the newInventory array
    var currentInvStr = currentInv.toString();
    //console.log(currentInvStr);
    //iterate through the newInventory array to see if the item is found in the currentInv string
    for (var i = 0; i < newInventory.length; i++) {
        //if the the item is not found, add it to the currentInv array
        if (currentInvStr.indexOf(newInventory[i][1]) === -1) {
            currentInv.push(newInventory[i]);
        }
        else {
            //if the item is found, update the quantity of the item in the currentInv array
            for (var j = 0; j < currentInv.length; j++) {
                if (currentInv[j][1] === newInventory[i][1]) {
                    currentInv[j][0] += newInventory[i][0];
                    break;
                }
            }
        }
    }
    //sorts the current inventory array items by alphebethical order
    currentInv.sort(function (a, b) {
        if (a[1] > b[1]) {
            return 1;
        }
        if (a[1] < b[1]) {
            return -1;
        }
        return 0;
    });
    console.log(currentInv);
    return currentInv;
}



    


// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"]
];

var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"]
];

//updateInventory(curInv, newInv);
updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]).length;
//updateInventory([[21, "Bowling Ball"], [2, "Dirty Sock"], [1, "Hair Pin"], [5, "Microphone"]], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//updateInventory([], [[2, "Hair Pin"], [3, "Half-Eaten Apple"], [67, "Bowling Ball"], [7, "Toothpaste"]]);
//updateInventory([[0, "Bowling Ball"], [0, "Dirty Sock"], [0, "Hair Pin"], [0, "Microphone"]], [[1, "Hair Pin"], [1, "Half-Eaten Apple"], [1, "Bowling Ball"], [1, "Toothpaste"]]);
