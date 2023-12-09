export function calculateTotalBill(items, prices, selectedItems) {
    let total = 0;
    for (const selectedItem of selectedItems) {
        const index = items.indexOf(selectedItem);
        if (index !== -1) {
            total += prices[index];
        }
    }
    return total;
}
export function calculateDiscount(total) {
    const discountPercentage = 0.1;
    return total * discountPercentage;
}
