//using constructor 
class ConsCustomer{
    firstName : string;
    lastName : string;

    constructor(theFirst : string, theLast: string){
        this.firstName = theFirst;
        this.lastName = theLast;
    }
}

// create an instance

let myCustomer2 = new ConsCustomer("Arijit", "Ghosh");


console.log(myCustomer2.firstName);
console.log(myCustomer2.lastName);
