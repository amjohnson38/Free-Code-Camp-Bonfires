function findElement(arr, func) {
  var num = 0;
  // the array.prototype.find() method returns a value in the array, if an element  in the array satisfies the provided test function
num = arr.find(func);
console.log(num);
  return num;
}

findElement([1, 2, 3, 4], function(num){ return num % 2 === 0; });
findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; })
findElement([1, 3, 5, 9], function(num) { return num % 2 === 0; })