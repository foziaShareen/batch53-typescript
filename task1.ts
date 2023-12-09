import inquirer from 'inquirer';
import showBanner from 'node-banner';
import { calculateTotalBill, calculateDiscount } from './functions.js';

(async () => {
  await showBanner('Shopping', 'shopping,bill,discount', 'red', 'blue');
})();

async function Shopping() {
  let condition = true;

  while (condition) {
    const { groceryType } = await inquirer.prompt([
      {
        type: 'list',
        name: 'groceryType',
        message: 'Do you want to buy fruits or vegetables?',
        choices: ['Fruits', 'Vegetables']
      },
    ]);

    let items: string[] = [];
    let prices: number[] = [];

    if (groceryType === 'Fruits') {
      items = ['Apple', 'Banana', 'Melon'];
      prices = [12.5, 8.75, 20.0];
    } else {
      items = ['Onion', 'Tomato', 'Carrot'];
      prices = [13, 11, 12];
    }

    const { selectedItems, paymentMethod } = await inquirer.prompt([
      {
        type: 'checkbox',
        name: 'selectedItems',
        message: `Select ${groceryType.toLowerCase()}:`,
        choices: items.map(item => ({ name: item }))
      },
      {
        type: 'list',
        name: 'paymentMethod',
        message: 'Select a payment method:',
        choices: ['Credit Card', 'Debit Card', 'Cash']
      },
    ]);

    const total = calculateTotalBill(items, prices, selectedItems);
    const discount = calculateDiscount(total);

    console.log(`Total Bill: ${total}`);
    console.log(`Discount: ${discount}`);

    // Handle the rest of your logic based on user input

    const { again } = await inquirer.prompt([
      {
        type: 'confirm',
        name: 'again',
        message: 'Do you want to shop again?',
        default: true
      },
    ]);

    condition = again;
  }
}

setTimeout(() => {
  Shopping();
}, 10000);
