
let words = ['apple', 'orange', 'grape', 'mango'];

let titlecase = function (words) {
    let caps = [];
    for (let word of words) {
        caps.push(word.charAt(0).toUpperCase() + word.slice(1));
    };
    return caps;
}
console.log(titlecase(words));