let arrayNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let evenNumber = []
let oddNumber = []

for (let i = 0; i < arrayNumber.length; i++) {
    if (arrayNumber[i]% 2 ==0) {
        evenNumber.push(arrayNumber[i])
    } else {
        oddNumber.push(arrayNumber[i])
    }
    
}

console.log("Mang so chan: ", evenNumber);
console.log("Mang so le: ", oddNumber);