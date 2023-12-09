//This line declares a TypeScript function named calculateTotalBill 
//that takes three parameters: items (an array of strings representing item names),
// prices (an array of numbers representing the prices of corresponding items), and selectedItems 
//(an array of strings representing the items selected by the user). It returns a number, representing the total bill.
export function calculateTotalBill(items: string[], prices: number[], selectedItems: string[]): number {
  // Initializes a variable total to 0. This variable will be used to accumulate the total cost of selected items.  
  let total = 0;
  // Starts a loop that iterates over each selected item in the selectedItems array.
    for (const selectedItem of selectedItems) {
      // Finds the index of the current selectedItem in the items array.
      const index = items.indexOf(selectedItem);
  // Checks if the selectedItem is found in the items array. The indexOf method returns -1 if the item is not found.
      if (index !== -1) {
        //If the item is found, it adds the corresponding price (from the prices array) to the total.
        total += prices[index];
      }
    }
    
  
    return total;
  }
  //: Declares another function, calculateDiscount, which takes a total parameter
  // (representing the total bill) and returns a number (representing the calculated discount).
  
  export function calculateDiscount(total: number): number {
    //Sets a fixed discount percentage (in this case, 10%). You can adjust this value based on your discount calculation requirements.
    const discountPercentage = 0.1;
    // Calculates the discount amount by multiplying the total bill by the discount percentage and returns the result.
    return total * discountPercentage;
  }
  
