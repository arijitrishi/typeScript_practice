//using constructor 
var ConsCustomer = /** @class */ (function () {
    function ConsCustomer(theFirst, theLast) {
        this.firstName = theFirst;
        this.lastName = theLast;
    }
    return ConsCustomer;
}());
// create an instance
var myCustomer2 = new ConsCustomer("Arijit", "Ghosh");
console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
