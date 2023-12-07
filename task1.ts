//we defines a function named buyGroceries that takes a parameter choice indicating whether the customer wants to buy "fruits" or "vegetables".
// we put void because no return is required
function buyGroceries(choice: string): void {
    //Inside the function, there are arrays items and prices to store the available items and their corresponding prices.
    let items: string[];
    let prices: number[];
    let totalBill: number = 0;

    if (choice === "fruits") {
        items = ["Apple", "Melon", "Orange"];
        prices = [200, 100, 105];
    } else if (choice === "vegetables") {
        items = ["Garlic", "Onion", "Tomato"];
        prices = [10, 20, 25];
    } else {
        console.log("sorry we have not this item!");
        return;
    }

    console.log(`Available items: ${items.join(", ")}`);

    //  adding items to the cart
    for (let i = 0; i < items.length; i++) {
        //The loop generates a random quantity for each item and updates the totalBill accordingly.
        const quantity: number = Math.floor(Math.random() * 5) + 1;
        //console.log(quantity)
        console.log(`Adding ${quantity} ${items[i]} to the cart.`);
        totalBill += quantity * prices[i];
    }

    console.log(`Total Bill: RS${totalBill.toFixed(2)}`);
}

// Function to  checking discounts
function checkDiscounts(totalBill: number): void {
    if (totalBill > 20) {
        const discountPercentage: number = 10;
        const discountAmount: number = (totalBill * discountPercentage) / 100;
        const discountedTotal: number = totalBill - discountAmount;

        console.log(` You qualify for a ${discountPercentage}% discount.`);
        console.log(`Discounted Total: Rs${discountedTotal.toFixed(2)}`);
    } else {
        console.log("No discounts .");
    }
}

// Function to simulate the checkout process
function checkoutProcess(): void {
    console.log("Checkout Process:");

    // Nested loop for payment options
    let paymentMethod: string = "";
    while (paymentMethod !== "credit card" && paymentMethod !== "cash") {
        console.log("Choose a payment method: ");
        console.log("1. Credit Card");
        console.log("2. Cash");

        const choice: number = Math.floor(Math.random() * 2) + 1;
        switch (choice) {
            case 1:
                paymentMethod = "credit card";
                break;
            case 2:
                paymentMethod = "cash";
                break;
            default:
                console.log("Invalid choice. Please choose again.");
                break;
        }
    }

    console.log(`Payment method chosen: ${paymentMethod}`);
    console.log("Thank you for shopping with us!");
}

// Main simulation
const groceryChoice: string = Math.random() < 0.5 ? "fruits" : "vegetables";
buyGroceries(groceryChoice);
//Math.floor(Math.random() * 30) + 10:  10 is added to the result. This shifts the range of possible values to be from 10
// to 40 (10 + 30). 
//This is done to ensure that the total bill amount is at least 10, and it can go up to 40.

const totalBillAmount: number = Math.floor(Math.random() * 30) + 10;
console.log(`Total Bill Amount: Rs${totalBillAmount.toFixed(2)}`);

checkDiscounts(totalBillAmount);
checkoutProcess();
