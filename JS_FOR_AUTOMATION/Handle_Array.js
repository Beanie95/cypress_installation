let myArray = [1, 'Hien', 'Anh', 7]

console.log(myArray[1]);
console.log(myArray[myArray.length -1]); // lay element cuoi cung
console.log(typeof(myArray));

myArray.push('Lan')
console.log(myArray);

// myArray[4] = 10
// console.log(myArray);

//myArray.pop() // xoa element cuoi cung trong array
//console.log(myArray);

myArray.splice(1, 3) //(thu tu bat dau xoa, so luong xoa)
console.log(myArray);

//Object

let customer = {
    firstName: "John",
    lastName: "Smith",
    cars: ["Honda", "Toyota", "Volvo"]
}
customer.firstName = "Micheal" //dot notation
customer["lastName"] = "Scofield" //bracket notation
console.log(`${customer.firstName} ${customer.lastName} has the car named ${customer.cars[0]}`);
console.log(customer.cars[2]);

//Array

