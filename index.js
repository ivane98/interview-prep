//BUBBLE SORT

// let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function bubbleSort(arr) {
//   let len = arr.length;
//   for (let i = 0; i < len; i++) {
//     for (let j = 0; j < len; j++) {
//       if (arr[j] > arr[j + 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j + 1];
//         arr[j + 1] = temp;
//         console.log(arr);
//       }
//     }
//   }
// }

// bubbleSort(numbers);
// console.log(numbers);

//SELECTION SORT

// let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function selectionSort(arr) {
//   const len = arr.length;
//   for (let i = 0; i < len; i++) {
//     let min = i;
//     let temp = arr[i];
//     for (let j = i + 1; j < len; j++) {
//       if (arr[j] < arr[min]) {
//         min = j;
//       }
//     }
//     arr[i] = arr[min];
//     arr[min] = temp;
//   }
//   return arr;
// }

// selectionSort(numbers);
// console.log(numbers);

//INSERTION SORT

// let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// const insertionSort = (arr) => {
//   for (let i = 0; i < arr.length; i++) {
//     for (let j = i; j > 0; j--) {
//       if (arr[j] < arr[j - 1]) {
//         let temp = arr[j];
//         arr[j] = arr[j - 1];
//         arr[j - 1] = temp;
//       }
//     }
//   }
//   return arr;
// };

// insertionSort(numbers);
// console.log(numbers);

//MERGE SORT

// let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function mergeSort(array) {
//   if (array.length <= 1) {
//     return array;
//   }
//   let mid = Math.floor(array.length / 2);
//   let left = array.slice(0, mid);
//   let right = array.slice(mid);
//   //   console.log("left" + left);
//   //   console.log("right" + right);
//   return merge(mergeSort(left), mergeSort(right));
// }

// function merge(left, right) {
//   let mergeArr = [];
//   let i = 0;
//   let j = 0;

//   while (i < left.length && j < right.length) {
//     if (left[i] < right[j]) {
//       mergeArr.push(left[i]);
//       i++;
//     } else {
//       mergeArr.push(right[j]);
//       j++;
//     }
//   }
//   //   console.log(left, right);
//   return mergeArr.concat(left.slice(i)).concat(right.slice(j));
// }

// let answer = mergeSort(numbers);
// console.log(answer);
