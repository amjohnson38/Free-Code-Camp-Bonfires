

//Create an array that holds the value of the denominations
var valueArray = [0.01, 0.05, 0.10, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];

function checkCashRegister(price, cash, cid) {
    //Create an array that holds the change that is returned back to the customer
    var changeGivenBack = [["PENNY", 0], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]];
    //The amount being returned back to the customer
    var change = cash - price;
    //adds all the cash amounts in the cid array
    var totalCashInDrawer = cid.reduce(function (a, b) {
        return a + b[1];//b is the second array of the cid array and [1] is the items that is being added.
    }, 0);
    //adjusts the total cash in the drawer to the nearest dollar
    totalCashInDrawer = Math.round(totalCashInDrawer * 100) / 100;
    //console.log(totalCashInDrawer);

    if (totalCashInDrawer < change) {
        return "Insufficient Funds";
    }

    else if (totalCashInDrawer === change) {
        return "Closed";
    }

    else {
        // Change is the change that remains to be given to the customer.This is where the returnChange function is called.
        change = returnChange(change, cid, changeGivenBack);
        if (change !== 0) {
            return "Insufficient Funds";
        }
        // creates an array of the amounts that have been passed through the hasValue function
        var finalChangeGivenBack = changeGivenBack.filter(hasValue);
        // Loops through the finalChangeGivenBack array 
        for (var i = 0; i < finalChangeGivenBack.length; i++) {
            //parses the amount at finalChangeGivenBack[i][1] and returns an amount with only to decimal places
            finalChangeGivenBack[i][1] = parseFloat(finalChangeGivenBack[i][1]);
        }
        //reverses the order of the finalChangeGivenBack array since the challenge asked that the change be returned from highest denomination to the lowest denomination
        finalChangeGivenBack.reverse();
        //console.log(finalChangeGivenBack);
        return finalChangeGivenBack;
    }
}
//checks the amount at the given index to see if it's greater than zero
function hasValue(value) {
    return value[1] > 0;
}
// a function to implement what type of change is given back
var returnChange = function (change, cid, changeGivenBack) {
    //console.log("change at beginning " + change);
    //iterates through the cash in draw from the largest denomination and it's amount
    for (var i = cid.length - 1; i >= 0; i--) {
        //as long as the amount at the given index in the cash in draw array is greater than zero and the value at the given idex is greater than zero, change can be given
        while (cid[i][1] > 0 && valueArray[i] <= change) {
            //console.log("denomination " + cid[i][0]);
            cid[i][1] = cid[i][1] - valueArray[i];
            change = change - valueArray[i];
            change = Math.round(change * 100) / 100;
            changeGivenBack[i][1] = changeGivenBack[i][1] + valueArray[i];
            changeGivenBack[i][1] = Math.round(changeGivenBack[i][1] * 100) / 100;
            //console.log("change now " + change);
        }
    }
    return change;
};


// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
checkCashRegister(3.26, 100.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
//checkCashRegister(19.50, 20.00, [["PENNY", 0.50], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);