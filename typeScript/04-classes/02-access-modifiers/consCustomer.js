//using constructor 
var ConstructorCustomer = /** @class */ (function () {
    function ConstructorCustomer(theFirst, theLast) {
        this._firstName = theFirst;
        this._lastName = theLast;
    }
    Object.defineProperty(ConstructorCustomer.prototype, "firstName", {
        get: function () {
            return this._firstName;
        },
        set: function (value) {
            this._firstName = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(ConstructorCustomer.prototype, "lastName", {
        get: function () {
            return this._lastName;
        },
        set: function (value) {
            this._lastName = value;
        },
        enumerable: false,
        configurable: true
    });
    return ConstructorCustomer;
}());
// create an instance
var myCustomer3 = new ConstructorCustomer("Arijit", "Ghosh");
console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);
