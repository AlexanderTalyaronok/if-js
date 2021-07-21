//lesson-3
// checks whether it's a palindrome and returns a bool value
const palindrome = (str) => str.toLowerCase() === str.split("").reverse().join("").toLowerCase();

console.log(palindrome("Madam"));
console.log(palindrome("echo"));

// the function returns the smallest value 
const min = (a, b) => a < b ? a : b;

console.log(min(6, 2));

// the function returns the greatest value
const max = (a, b) => a > b ? a : b;

console.log(max(4, 9));

// the function generates array with 10 random values between 0 and 100, then replaces 0 with "zero"
const arr = [];

const generateArr = (arrLength) => {
    for (let i = 0; i < arrLength; i++) {
        arr[i] = Math.floor(Math.random() * 100).toString();
    }

    return arr;
};
 
const replaceZero = () => arr.map(item => item.replace(/0/g, "zero"));

console.log(replaceZero(generateArr(10)));
