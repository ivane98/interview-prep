// class LinkedList {
//   constructor(value) {
//     this.head = {
//       value: value,
//       next: null,
//     };
//     this.tail = this.head;
//     this.length = 1;
//   }
//   append(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };

//     this.tail.next = newNode;
//     this.tail = newNode;
//     this.length++;
//     return this;
//   }
//   prepend(value) {
//     const newNode = {
//       value: value,
//       next: null,
//     };
//     newNode.next = this.head;
//     this.head = newNode;
//     this.length++;
//     return this;
//   }
//   printList() {
//     const array = [];
//     let currentNode = this.head;
//     while (currentNode) {
//       array.push(currentNode.value);
//       currentNode = currentNode.next;
//     }
//     return array;
//   }
//   insert(index, value) {
//     //Check for proper parameters;
//     if (index >= this.length) {
//       return this.append(value);
//     }

//     const newNode = {
//       value: value,
//       next: null,
//     };
//     const leader = this.traverseToIndex(index - 1);
//     const holdingPointer = leader.next;
//     leader.next = newNode;
//     newNode.next = holdingPointer;
//     this.length++;
//     return this.printList();
//   }
//   traverseToIndex(index) {
//     //Check parameters
//     let counter = 0;
//     let currentNode = this.head;
//     while (counter !== index) {
//       currentNode = currentNode.next;
//       counter++;
//     }
//     return currentNode;
//   }
// remove(index) {
//   // Check Parameters
//   const leader = this.traverseToIndex(index - 1);
//   const unwantedNode = leader.next;
//   leader.next = unwantedNode.next;
//   this.length--;
//   return this.printList();
// }
//   reverse() {
//     if (!this.head.next) {
//       return this.head;
//     }

//     let first = this.head;
//     this.tail = this.head;
//     let second = first.next;

//     while (second) {
//       let temp = second.next;
//       second.next = first;
//       first = second;
//       second = temp;
//     }

//     this.head.next = null;
//     this.head = first;
//     return this;
//   }
// }

// let myLinkedList = new LinkedList(5);
// myLinkedList.append(6);
// myLinkedList.append(7);
// myLinkedList.insert(2, 99);
// myLinkedList.insert(20, 88);
// myLinkedList.remove(2);
// console.log(myLinkedList.printList());
// console.log(myLinkedList.reverse());
// console.log(myLinkedList.printList());

///  Stack with linkedList

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

///Stack with Array

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

/// Queues

//class Stack {
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

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }
  peek() {
    return this.first;
  }
  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    this.length++;
    return this;
  }
  dequeue() {
    if (!this.first) {
      return null;
    }
    if (this.first === this.last) {
      // this.first = null;
      this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
    return this;
  }
  isEmpty() {
    if (this.first) {
      return false;
    }
    return true;
  }
}

const myQueue = new Queue();
myQueue.enqueue("Joy");
// myQueue.enqueue("Matt");
// myQueue.enqueue("Pavel");
// myQueue.enqueue("Samir");
myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
// myQueue.dequeue();
console.log(myQueue.isEmpty());
console.log(myQueue);
//Joy
//Matt
//Pavel
//Samir
