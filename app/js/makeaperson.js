var Person = function (firstAndLast) {
    //split the first and last into two arrays  
    var fullName = firstAndLast;


    this.getFirstName = function () {
        console.log(fullName.split(" ")[0]);
        return fullName.split(" ")[0];
    };
    this.getLastName = function () {
        console.log(fullName.split(" ")[1]);
        return fullName.split(" ")[1];
    };
    this.getFullName = function () {
        return fullName;
    };
    this.setFirstName = function(first) {
        fullName = first + " " + fullName.split(" ")[1];
        

    };
    this.setLastName = function(last) {
        fullName = fullName.split(" ")[0] + " " + last; 
        
    };
    this.setFullName = function(newFullName) {
        fullName = newFullName;
        
    };



};

var bob = new Person('Bob Ross');
bob.getFullName();
bob.getFirstName();
bob.getLastName();
bob.setFirstName();
bob.setLastName();
bob.setFullName();






//return firstAndLast;