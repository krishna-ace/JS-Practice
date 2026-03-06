// Qs1.Write an arrow function named arrayAverage that accepts anarray 
// of numbers and returns the average of those numbers.
const averArray = (arr) => {
    for (let i = 0; i < arr.length; i++){
        let num = 0;
        num += arr[i];
        let count = 0;
         count++;
        return console.log(num/count);
    }  
};
let arr = [2,2,2];
console.log(averArray(arr));


// Qs2.Write an arrow function named isEven() that takes a single
// number as argument and returns if it is even or not.

let n = 5;
const isEven = (n) => n %2 == 0;
console.log(isEven(n));
