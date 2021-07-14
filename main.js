// lesson-2-1
let user = "John Doe";
console.log(user);

let student = "Alex";
console.log(student);

user = student; // user = "Alex"
console.log(user);

let test = 1;
test++;
test += "1"; // test = 21
console.log(test);
test -= 1; // test = 20
console.log(test);
test = Boolean(test); // test = true
console.log(test);

// lesson-2-2
// display the product of array elements
let numbers = [2, 3, 5, 8];
let result = 1;
for (let i = 0; i < numbers.length; i++) {
    result *= numbers[i];
}
console.log(result);

// display array elements that are greater than 5 and less than 10
numbers = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < numbers.length; i++) {
    if (5 < numbers[i] & numbers[i] < 10) {
        console.log(numbers[i]);
    }
}

// display even array elements
numbers = [2, 5, 8, 15, 0, 6, 20, 3];
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        console.log(numbers[i]);
    }
}