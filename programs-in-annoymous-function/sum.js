
let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let total = function (numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum += numbers[i];
    }
    return sum;
}

console.log(total(numbers));