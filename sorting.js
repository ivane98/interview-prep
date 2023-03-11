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
//   return mergeArr.concat(left.slice(i)).concat(right.slice(j));
// }

// let answer = mergeSort(numbers);
// console.log(answer);

//Quick Sort

// let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// function quickSort(numbers) {
//   if (numbers.length <= 1) return numbers;

//   var left = [];
//   var right = [];
//   var pivot = numbers.pop();

//   numbers.map((num) => (num < pivot ? left.push(num) : right.push(num)));

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// let answer = quickSort(numbers);

// console.log(answer);

//Heap Sort

// class MaxHeap {
//   constructor() {
//     this.heap = [];
//   }

//   parentIndex(index) {
//     return Math.floor((index - 1) / 2);
//   }

//   leftChildIndex(index) {
//     return 2 * index + 1;
//   }

//   rightChildIndex(index) {
//     return 2 * index + 2;
//   }

//   swap(a, b) {
//     let temp = this.heap[a];
//     this.heap[a] = this.heap[b];
//     this.heap[b] = temp;
//   }

//   insert(item) {
//     this.heap.push(item);
//     var index = this.heap.length - 1;
//     var parent = this.parentIndex(index);
//     while (this.heap[parent] && this.heap[parent] < this.heap[index]) {
//       this.swap(parent, index);
//       index = this.parentIndex(index);
//       parent = this.parentIndex(index);
//     }
//   }

//   delete() {
//     var item = this.heap.shift();
//     this.heap.unshift(this.heap.pop());
//     var index = 0;
//     var leftChild = this.leftChildIndex(index);
//     var rightChild = this.rightChildIndex(index);
//     while (
//       (this.heap[leftChild] && this.heap[leftChild] > this.heap[index]) ||
//       this.heap[rightChild] > this.heap[index]
//     ) {
//       var max = leftChild;
//       if (this.heap[rightChild] && this.heap[rightChild] > this.heap[max]) {
//         max = rightChild;
//       }
//       this.swap(max, index);
//       index = max;
//       leftChild = this.leftChildIndex(max);
//       rightChild = this.rightChildIndex(max);
//     }
//     return item;
//   }
// }

// function heapSort(arr) {
//   var sorted = [];
//   var heap1 = new MaxHeap();

//   for (let i = 0; i < arr.length; i++) {
//     heap1.insert(arr[i]);
//   }

//   for (let i = 0; i < arr.length; i++) {
//     sorted.push(heap1.delete());
//   }
//   return sorted;
// }

// let arr = [1, 6, 2, 3, 7, 3, 4, 6, 9];
// arr = heapSort(arr);

// console.log(arr);
