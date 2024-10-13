
// // sort a stack using temporary stack
// // **********************************

// function sortStackAscending(originalStack) {
//     let tempStack = [];
//     while (originalStack.length > 0) {
//         let temp = originalStack.pop();
//         while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
//             originalStack.push(tempStack.pop());
//         }
//         tempStack.push(temp);
//     }
//     while (tempStack.length > 0) {
//         originalStack.push(tempStack.pop());
//     }
//     return originalStack;
// }

// let stack = [34, 3, 31, 98, 92, 23];
// console.log("Original Stack:", stack);
// stack = sortStackAscending(stack);
// console.log("Sorted Stack:", stack);


// ------------------------------------------------------------------------------------------------------------------


// function sortStackDescending(originalStack) {
//     let tempStack = [];
//     while (originalStack.length > 0) {
//         let temp = originalStack.pop(); 
//         while (tempStack.length > 0 && tempStack[tempStack.length - 1] < temp) {
//             originalStack.push(tempStack.pop());
//         }
//         tempStack.push(temp);
//     }
//     while (tempStack.length > 0) {
//         originalStack.push(tempStack.pop());
//     }
//     return originalStack; 
// }

// let stack = [34, 3, 31, 98, 92, 23];
// console.log("Original Stack:", stack);
// stack = sortStackDescending(stack);
// console.log("Sorted Stack:", stack);






