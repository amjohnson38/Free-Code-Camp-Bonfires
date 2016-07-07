function whereAreYou(collection, source) {
    // What's in a name?
    var arr = [];

    var keys = Object.keys(source);
    // Only change code below this line 

    /***************************************************************
     * If we could use underscore.js in FreeCodeCampl then this 
     * would be all we need to do
     */
    /*collection.forEach(collectionItem => {
        if(_.isMatch(collectionItem, source) === true){
            arr.push(collectionItem);
        }
    });*/

    /**************************************************
     * This technique uses object to string and multiple string maniplation 
     * techniques to compare the objects
     */

    // convert what we're looking for into a string
    var sourceString = JSON.stringify(source);

    // remove the brackets, because we don't care about those
    sourceString = sourceString.replace("{", "").replace("}", "");

    var sourceArray = sourceString.split(",");
    //console.table(sourceArray);

    // output to console for debugging purposes
    // console.log("source string: " + sourceString);

    // loop through the collection array
    for (var j = 0; j < collection.length; j++) {
        
        //define collection which is an item of the collection array
        var collectionItem = collection[j];


        // convert this item to a string
        var collectionString = JSON.stringify(collectionItem);

        // remove the brackets, because we don't care about those
        collectionString = collectionString.replace("{", "").replace("}", "");

        // turn the string into an array
        var collectionArray = collectionString.split(",");
        //console.table(collectionArray);

        // only want to push a collectionItem onto the "arr"" array if and only if
        // it contains everything from the sourceArray
        // so create a counter to count how many things were found during the search
        var foundCounter = 0;

        // loop through the source array and look for each source item in the 
        // collectionArray
        for (var i = 0; i < sourceArray.length; i++) {
            if (collectionArray.indexOf(sourceArray[i]) !== -1) {
                // the source item was found so increment the counter
                foundCounter++;
            }
        }

        // if the counter equals the size of the source array then all source items were
        // found so push the collection item onto "arr" array
        if (foundCounter === sourceArray.length) {
            arr.push(collectionItem);
        }
    };

    console.table(arr);


    // Only change code above this line
    return arr;
}

/**************************************************************
 * from StackOverflow user valentinas
 * http://stackoverflow.com/questions/15514907/determining-whether-one-array-contains-the-contents-of-another-array-in-javascri
 */
function arrayContainsAnotherArray(needle, haystack) {
    for (var i = 0; i < needle.length; i++) {
        if (haystack.indexOf(needle[i]) === -1)
            return false;
    }
    return true;
}

whereAreYou([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
whereAreYou([{ "a": 1 }, { "a": 1 }, { "a": 1, "b": 2 }], { "a": 1 })
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "b": 2 })
whereAreYou([{ "a": 1, "b": 2 }, { "a": 1 }, { "a": 1, "b": 2, "c": 2 }], { "a": 1, "c": 2 })
