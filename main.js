//lesson-3
// checks whether it's a palindrome and returns a bool value
function palindrome(str) {
    str = str.toLowerCase();

    return str === str.split("").reverse().join("");
}

 console.log( palindrome("Madam") );
 console.log( palindrome("echo") );

 // the function returns the smallest value 
 function min(a, b) {
    if (a < b) {
        return a;
    }

    return b;
 }

 console.log( min(3, 7) );

 // the same function using the ternary operator
 function min(a, b) {
    return a < b ? a : b;
 }

 console.log( min(6, 2) );

 // the function returns the greatest value
 function max(a, y) {
    if (a > y) {
        return a;
    }

    return y;
 }

 console.log( max(9, 4) );

 // the same function using the ternary operator
 function max(a, y) {
    return a > y ? a : y;
 }

 console.log( max(5, 8) );

 // the function generates array with 10 random values between 0 and 100, then replaces 0 with "zero"
 function zeroReplace() {
    let arr = new Array();

    for (let i = 0; i < 10; i++) {
        arr[i] = Math.floor(Math.random() * 100);
    }

    console.log(arr);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === 0 || arr[i] % 10 === 0 || arr[i] === 100) {
            arr[i] = arr[i].toString().replace("00", "zerozero");
            arr[i] = arr[i].toString().replace("0", "zero");
        }
    }

    console.log(arr);
 }

 zeroReplace();