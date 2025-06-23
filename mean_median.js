// mean_median.js

const readline = require('readline');

// interface for user input
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

// Function to calculate the mean
function calculateMean(arr) {
    const sum = arr.reduce((acc, val) => acc + val, 0);
    return sum / arr.length;
}

// Function to calculate the median
function calculateMedian(arr) {
    const sorted = [...arr].sort((a, b) => a - b);
    const mid = Math.floor(sorted.length / 2);

    if (sorted.length % 2 === 0) {
        return (sorted[mid - 1] + sorted[mid]) / 2;
    } else {
        return sorted[mid];
    }
}

// Funcion to prompt user repeatedly
function promptUser() {
    rl.question('Enter an integer (or "q" to quit): ', (input) => {
        if (input.toLowerCase() === 'q') {
            if (numbers.length === 0) {
                console.log('No numbers entered.');
            } else {
                const mean = calculateMean(numbers);
                const median = calculateMedian(numbers);
                console.log(`\nResults:`);
                console.log(`Mean: ${mean.toFixed(2)}`);
                console.log(`Median: ${median.toFixed(2)}`);
            }
            rl.close();
            return;
        }

        const parsed = parseInt(input, 10);
        if (isNaN(parsed)) {
            console.log('Invalid input. Please enter a valid integer.');
        } else {
            numbers.push(parsed);
        }

        promptUser(); // ask again
    });
}

// Start the prompt loop
console.log('Welcome Mcgarry! Please enter integers to calculate mean and median.');
promptUser();
