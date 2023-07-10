var cars = ["Honda", "Toyota", "Volvo"]

for (let i = 0; i < cars.length; i++) {
    console.log(cars[i]);
    
}

for(let car of cars){
    console.log(car)
    if(car == "Toyota"){
        break
        
    }
    
}

cars.forEach( car => {
    console.log(car)
})

export function printAge(age){
    console.log(age);
}

let helloTwo = function(){
    console.log("Hello Two!");
}

export let multiplyByTwo = (number) => {
    let result = number * 2
    return result
}
