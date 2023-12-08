
import inquirer from 'inquirer';
async function Shopping() {
  console.log('Welcome to the Supermarket\n');

  // Scenario 1 - Buying Groceries
  console.log('=== Scenario 1: Buying Groceries ===');

  const groceryChoice = await inquirer.prompt({
    type: 'list',
    name: 'groceryType',
    message: 'Do you want to buy fruits or vegetables?',
    choices: ['Fruits', 'Vegetables'],
  });

  let items: string[] = [];
  let prices: number[] = [];

  if (groceryChoice.groceryType === 'Fruits') {
    items = ['Apple', 'Banana', 'Melon'];
    prices = [12.5, 8.75, 20.0];
  } else {
    items = ['Onion', 'Tomato', 'Carrot'];
    prices = [13, 11, 12];
  }

  const selectedItems = await inquirer.prompt({
    type: 'checkbox',
    name: 'selectedItems',
    message: `Select ${groceryChoice.groceryType.toLowerCase()}:`,
    choices: items,
  });

  let totalBill = 0;
  selectedItems.selectedItems.forEach((item:string) => {
    const index = items.indexOf(item);
    totalBill += prices[index];
  });

  console.log(`Total Bill: RS:${totalBill.toFixed(2)}\n`);

  // Scenario 2 - Checking Discounts
  console.log('=== Scenario 2: Checking Discounts ===');

  if (totalBill > 10) {
    const discountPercentage = 10;
    const discountAmount = (totalBill * discountPercentage) / 100;
    const discountedTotal = totalBill - discountAmount;

    console.log(`You qualify for a ${discountPercentage}% discount!`);
    console.log(`Discounted Total: RS:${discountedTotal.toFixed(2)}\n`);
    totalBill = discountedTotal;
  }

  // Scenario 3 - Checkout Process
  console.log('=== Scenario 3: Checkout Process ===');

  const paymentMethod = await inquirer.prompt({
    type: 'list',
    name: 'paymentMethod',
    message: 'Select a payment method:',
    choices: ['Credit Card', 'Debit Card', 'Cash'],
  });

  console.log(`You have chosen to pay with ${paymentMethod.paymentMethod}.`);
  console.log('Thank you for shopping with us!');
}

Shopping();
