"use strict";
//parameter properties using constructor 
class ConstructorCustomer {
    constructor(_firstName, _lastName) {
        this._firstName = _firstName;
        this._lastName = _lastName;
    }
    get firstName() {
        return this._firstName;
    }
    set firstName(value) {
        this._firstName = value;
    }
    get lastName() {
        return this._lastName;
    }
    set lastName(value) {
        this._lastName = value;
    }
}
// create an instance
let myCustomer3 = new ConstructorCustomer("Arijit", "Ghosh");
console.log(myCustomer3.firstName);
console.log(myCustomer3.lastName);