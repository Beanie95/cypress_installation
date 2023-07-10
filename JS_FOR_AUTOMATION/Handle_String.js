let myName = 'Hien'
//console.log(myName.length);

let prefixName = 'Hello, my nam is '
let finalString = prefixName.concat(myName)
//console.log(finalString);

let helloString = 'Hello World'
let helloStringSplit1 = helloString.split("")
let helloStringSplit2 = helloString.split("e")
let helloStringSplit3 = helloString.split(" ")
// console.log(helloStringSplit1);
// console.log(helloStringSplit2);
// console.log(helloStringSplit3);

let indexOfA = helloString.indexOf('A')
console.log(indexOfA);

let indexOfO = helloString.indexOf('o')
console.log(indexOfO);

let indexOfWorld = helloString.indexOf('World')
console.log(indexOfWorld);

let price = [80, 15, 50]
let itemName = ["Table", "Cup", "Chair"]

let messageTOPrint = `The price for your ${itemName[1]} is ${price[1]} dollars` //interpolation
console.log(messageTOPrint);