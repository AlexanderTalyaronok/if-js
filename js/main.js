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
const generateArr = (arrLength) => {
    const arr = [];

    for (let i = 0; i < arrLength; i++) {
        arr[i] = Math.floor(Math.random() * 200);
    }

    return arr;
};
 
const replaceZero = (arr) => arr.map((item) => String(item).includes("0") ? String(item).replace(/0/g, "zero") : item);

console.log(replaceZero(generateArr(10)));

// lesson-4 
const colors = ["magenta", "cyan", "firebrick", "springgreen", "skyblue"];
const text1 = document.getElementById("text1");
const text2 = document.getElementById("text2");
const text3 = document.getElementById("text3");

const changeColor = () => {
    let counter = 0;

    return (event) => {
        if (counter === colors.length) {
            counter = 0;
        }

        event.target.style.backgroundColor = colors[counter];

        counter++;
    };
}; 

text1.addEventListener('click', changeColor());
text2.addEventListener('click', changeColor());
text3.addEventListener('click', changeColor());

// the sum function 
const sum = (a) => (b) => a + b;

console.log(sum(5)(2));