// /  Stack with linkedList

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.top;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
//   isEmpty() {
//     if (this.top === null) {
//       return true;
//     }
//     return false;
//   }
// }

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("Udemy");
// myStack.push("Discord");
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack.isEmpty());
// console.log(myStack);
// console.log(myStack.peek());

// /Stack with Array

// class Stack {
//   constructor() {
//     this.array = [];
//   }
//   peek() {
//     return this.array[this.array.length - 1];
//   }
//   push(value) {
//     this.array.push(value);
//     return this;
//   }
//   pop() {
//     this.array.pop();
//     return this;
//   }
//   isEmpty() {
//     if (this.array.length === 0) {
//       return true;
//     }
//     return false;
//   }
// }

// const myStack = new Stack();
// myStack.push("google");
// myStack.push("Udemy");
// myStack.push("Discord");
// myStack.pop();
// myStack.pop();
// myStack.pop();
// console.log(myStack.isEmpty());
// console.log(myStack);
// console.log(myStack.peek());

// / Queues

// class Stack {
//   constructor() {
//     this.top = null;
//     this.bottom = null;
//     this.length = 0;
//   }
//   push(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.top = newNode;
//       this.bottom = newNode;
//     } else {
//       const holdingPointer = this.top;
//       this.top = newNode;
//       this.top.next = holdingPointer;
//     }
//     this.length++;
//     return this;
//   }
//   pop() {
//     if (this.top === this.bottom) {
//       this.bottom = null;
//     }
//     this.top = this.top.next;
//     this.length--;
//     return this;
//   }
//   isEmpty() {
//     if (this.top === null) {
//       return true;
//     }
//     return false;
//   }
// }

// class Node {
//   constructor(value) {
//     this.value = value;
//     this.next = null;
//   }
// }

// class Queue {
//   constructor() {
//     this.first = null;
//     this.last = null;
//     this.length = 0;
//   }
//   peek() {
//     return this.first;
//   }
//   enqueue(value) {
//     const newNode = new Node(value);
//     if (this.length === 0) {
//       this.first = newNode;
//       this.last = newNode;
//     } else {
//       this.last.next = newNode;
//       this.last = newNode;
//     }
//     this.length++;
//     return this;
//   }
//   dequeue() {
//     if (!this.first) {
//       return null;
//     }
//     if (this.first === this.last) {
//       // this.first = null;
//       this.last = null;
//     } else {
//       this.first = this.first.next;
//     }

//     this.length--;
//     return this;
//   }
//   isEmpty() {
//     if (this.first) {
//       return false;
//     }
//     return true;
//   }
// }

// const myQueue = new Queue();
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// myQueue.enqueue("Samir");
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// console.log(myQueue.isEmpty());
// console.log(myQueue);
// Joy
// Matt
// Pavel
// Samir

// //QUEUES USING STACKS

// class Queue {
//   constructor() {
//     this.first = [];
//     this.last = [];
//   }
//   peek() {
//     if (this.last.length > 0) {
//       return this.last[0];
//     }
//     return this.first[this.first.length - 1];
//   }
//   push(value) {
//     this.first.push(value);
//     this.last[0] = value;
//     return this;
//   }
//   pop() {
//     this.first.shift();
//   }
//   isEmpty() {
//     if (this.first) {
//       return false;
//     }
//     return true;
//   }
// }

// const myQueue = new Queue();
// myQueue.push("Joy");
// myQueue.push("Matt");
// myQueue.push("Pavel");
// myQueue.push("Samir");
// myQueue.pop();
// myQueue.pop();
// console.log(myQueue.isEmpty());
// console.log(myQueue);

// class CrazyQueue {
//   constructor() {
//     this.first = [];
//     this.last = [];
//   }

//   enqueue(value) {
//     const length = this.first.length;
//     for (let i = 0; i < length; i++) {
//       this.last.push(this.first.pop());
//     }
//     this.last.push(value);
//     return this;
//   }

//   dequeue() {
//     const length = this.last.length;
//     for (let i = 0; i < length; i++) {
//       this.first.push(this.last.pop());
//     }
//     this.first.pop();
//     return this;
//   }
//   peek() {
//     if (this.last.length > 0) {
//       return this.last[0];
//     }
//     return this.first[this.first.length - 1];
//   }
// }

// const myQueue = new CrazyQueue();
// // myQueue.peek();
// myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// console.log(myQueue.peek());
// myQueue.dequeue();
// myQueue.dequeue();
// // myQueue.dequeue();
// // myQueue.peek();

// console.log(myQueue);
