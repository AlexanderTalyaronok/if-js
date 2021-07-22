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

function changeColor(textId) {
    for (let i = 0; i < colors.length; i++) {
        if (i === colors.length - 1) {
            return textId.style.backgroundColor = colors[0];
        }
        else if (textId.style.backgroundColor === colors[i]) {
            return textId.style.backgroundColor = colors[++i];
        } 
    }

    return textId.style.backgroundColor = colors[0];
}

text1.addEventListener('click', changeColor.bind(null, text1));
text2.addEventListener('click', changeColor.bind(null, text2));
text3.addEventListener('click', changeColor.bind(null, text3));

// the sum function 
const sum = (a) => (b) => a + b;

console.log(sum(5)(2));