// - **Scenario 1 - Modify Array with Methods:**
//     - Initialize an array with some initial elements.
//     - Demonstrate the usage of the following array methods:
//         - **`push`**: Add new elements to the end of the array.
//         - **`pop`**: Remove the last element from the array.
//         - **`shift`**: Remove the first element from the array.
//         - **`unshift`**: Add new elements to the beginning of the array.
// Initialize an array with some initial elements
let myArray = [10, 20, 30, 40, 50];
//  push: Add new elements to the end of the array
myArray.push(60, 70);
console.log("After push:", myArray);
//  pop: Remove the last element from the array
const poppedElement = myArray.pop();
console.log("After pop:", myArray);
console.log("Popped Element:", poppedElement);
//  shift: Remove the first element from the array
const shiftedElement = myArray.shift();
console.log("After shift:", myArray);
console.log("Shifted Element:", shiftedElement);
// unshift: Add new elements to the beginning of the array
myArray.unshift(100);
console.log("After unshift:", myArray);
// - **Scenario 2 - Subarray Creation:**
//     - Implement the use of **`splice`** and **`slice`** to create subarrays from the original array:
//         - **`splice`**: Create a subarray by removing elements from the original array.
//         - **`slice`**: Create a subarray without modifying the original array.
let myarr = [1, 2, 3, 4, 5];
//first parameter will be index number from where we want to delete element , second will be number of elements we want to delete
const deleteditems = myarr.splice(1, 2);
console.log(deleteditems);
// our original array will be modified so 2 3 will be removed
console.log(myarr);
// as a third parametr we can add some elements if we want to
const deletedAndAdded = myarr.splice(0, 1, 789);
// from zero index 1 will be deleted and [789 , 4,5 ] is now our array
console.log(deletedAndAdded);
console.log(myarr);
// in case we dont want to delete but only add  fist add index ,0,numbers you want to add for example 56,78
myarr.splice(1, 0, 56, 78);
console.log(myarr); // output will be [789,56,78,4,5]
// slice 
// in case of slice shallow copy is made our original array will not modified.
let myArrays = [1, 2, 3, 4, 5];
const getElement = myArrays.slice(1, 3);
console.log(getElement); // output will be [2,3]
console.log(myArrays); // original is not modified
// what if we want elements from last of array ?
// in that case we use minus and the number we want to get
const theLastthree = myArrays.slice(-3);
console.log(theLastthree);
export {};
