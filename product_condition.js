// product_condition.js

// Import the readline module for user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let numbers = [];

console.log("Enter integers one at a time. Type 'q' or 'Q' to quit.");

function askInput() {
  rl.question("Enter an integer (or 'q' to quit): ", input => {
    if (input.toLowerCase() === 'q') {
      rl.close();
      checkCondition(numbers);
      return;
    }

    const num = parseInt(input);
    if (isNaN(num)) {
      console.log("Error: Please enter a valid integer or 'q' to quit.");
      askInput();
    } else {
      numbers.push(num);
      askInput();
    }
  });
}

function checkCondition(nums) {
  console.log("\nYou entered:", nums.join(", "));
  
  if (nums.length < 3) {
    console.log("Too few numbers to check the condition.");
    return;
  }

  // Check if product of any two numbers equals a third
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (i !== j) {
        const product = nums[i] * nums[j];
        if (nums.includes(product)) {
          console.log(`Condition is met: ${nums[i]} x ${nums[j]} = ${product}`);
          return;
        }
      }
    }
  }

  console.log("Condition was not met.");
}

askInput();
