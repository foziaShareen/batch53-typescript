
// - **Scenario 1: Sum numbers**
//     - Write a function named **`add`** that takes two numbers as arguments and returns their sum.

function add(num1: number, num2: number): number {
    return num1 + num2;
}


const result = add(33, 5);
console.log(result);

// - **scenario 2: Check Even or Odd**
//     - Develop a function **`checkEvenOrOdd`** that checks if a given number is even or odd.
    // - The function should take an integer as a parameter and return a string indicating whether the number is even or odd.
function checkOddEven(num: number): string {
    if (num % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}
console.log((checkOddEven(5)))

// - **scenario 3: Calculate Area:**
//     - Create a function **`calculateArea`** that calculates the area of a rectangle.
//     - The function should take width and height as parameters and return the calculated area.


function calArea(width: number, height: number): number {
    const area: number = width * height;
    return area;
}

// Example usage:
const rectangleWidth: number = 15;
const rectangleHeight: number = 50;

const areaResult: number = calArea(rectangleWidth, rectangleHeight);
console.log(areaResult); 
// - **Scenario 4: String Reversal**
//     - Implement a function **`reverseString`** that reverses a given string.
//     - The function should take a string as a parameter and return the reversed string.
function reverseString(input: string): string {
    return input.split('').reverse().join('');
}


const originalString: string = "Type Script";
const reversedString: string = reverseString(originalString);

console.log(reversedString); 
// - **Scenario 5: Temperature Conversion:**
//     - Create a function **`convertCelsiusToFahrenheit`** that converts temperature from Celsius to Fahrenheit.
//     - The function should take a temperature value in Celsius as a parameter and return the equivalent temperature in Fahrenheit.
function CelsiusToFahrenheit(celsius: number): number {
    //  formula: Fahrenheit = (Celsius * 9/5) + 32
    const fahrenheit: number = (celsius * 9 / 5) + 32;
    return fahrenheit;
}


const celsiusTemperature: number = 35;
const fahrenheitTemperature: number = CelsiusToFahrenheit(celsiusTemperature);

console.log(fahrenheitTemperature); 


