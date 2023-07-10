// function helloOne() {
//     console.log("Hello One!");
// }
// helloOne()

// let helloTwo = function(){
//     console.log("Hello Two!");
// }
// helloTwo()

// let multiplyByTwo = (number) => {
//     let result = number * 2
//     return result
// }
// console.log(multiplyByTwo(5));

//import function
// import { printAge } from "../JS_FOR_AUTOMATION/Loop.js";
// printAge(5)

// //import all function in file js
// import * as helper from "../JS_FOR_AUTOMATION/Loop.js"
// helper.printAge(5)

class CustomerDetail {

    /**
     * This method will print firstname
     * @param {string} firstName 
     */
    printFirstName(firstName){
        console.log(firstName);
    }
}
export const cusDetail = new CustomerDetail()