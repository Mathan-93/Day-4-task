let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let find_odd = (numbers) => {
    let odd_numbers = [];
    for (let index of numbers) {
        if (index % 2 !== 0) {
            odd_numbers.push(index);
        };
    };
    return odd_numbers;
};

console.log(find_odd(numbers));