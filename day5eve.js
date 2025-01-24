
let sum = 0;
console.log("Multiplication Table of 5:");

for (let i = 1; i <= 10; i++) {
  let result = 5 * i;
  console.log(`5 x ${i} = ${result}`);
  sum += result;
}

console.log("Sum of numbers in the table:", sum);


console.log("Reversed numbers:");
for (let i = 1; i <= 10; i++) {
  let result = 5 * i;
  let reversed = result.toString().split('').reverse().join('');
  console.log(`Reversed of ${result} is ${reversed}`);
}
