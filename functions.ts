export function calculateTotalBill(items: string[], prices: number[], selectedItems: string[]): number {
    let total = 0;
  
    for (const selectedItem of selectedItems) {
      const index = items.indexOf(selectedItem);
  
      if (index !== -1) {
        total += prices[index];
      }
    }
  
    return total;
  }
  
  export function calculateDiscount(total: number): number {
    
    const discountPercentage = 0.1;
    return total * discountPercentage;
  }
  
