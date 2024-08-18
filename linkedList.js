export class LinkedList {
  constructor() {
    this.head = new Node(null);
  }
  append(value) {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    node.next = new Node(value);
  }
  prepend(value) {
    let head = this.head;
    let nextNode = head.next;
    head.next = new Node(value);
    head.next.next = nextNode;
  }
  size() {
    let count = 0;
    if (this.head === null) {
      return 0;
    }
    let node = this.head;
    while (node.next !== null) {
      count++;
      node = node.next;
    }
    return count;
  }
  head() {
    return this.head;
  }
  tail() {
    if (this.head === null) {
      return null;
    }
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }
  at(index) {
    if (this.head === null) {
      return null;
    }
    let node = this.head;
    for (let i = 0; i < index; i++) {
      node = node.next;
    }
    return node.data;
  }
  pop() {
    if (this.head === null) {
      return null;
    }
    let node = this.head;
    let previousNode = null;
    while (node.next !== null) {
      previousNode = node;
      node = node.next;
    }
    previousNode.next = null;
  }
  contains(value) {
    if (this.head === null) {
      return false;
    }
    let node = this.head;
    while (node !== null) {
      if (node.data === value) {
        return true;
      }
      node = node.next;
    }
    return false;
  }
  find(value) {
    if (this.head === null) {
      return -1;
    }
    let index = 0;
    let node = this.head;
    while (node !== null) {
      if (node.data === value) {
        return index;
      }
      node = node.next;
      index++;
    }
    return -1;
  }
  toString() {
    if (this.head === null) {
      return -1;
    }
    let node = this.head;
    console.log("->");
    while (node !== null) {
      console.log(`( ${node.data} ) ->`);
      node = node.next;
    }
    console.log("( null )");
  }
  insertAt(index, value) {
    if (index < 0 || index > this.size()) {
      return;
    }
    if (this.head === null) {
      return;
    }
    let node = this.head;
    let previousNode = null;
    for (let i = 0; i < index; i++) {
      previousNode = node;
      node = node.next;
    }

    previousNode.next = new Node(value);
    previousNode.next.next = node;
  }
  removeAt(index) {
    if (this.head === null) {
      return;
    }
    let currentNode = this.head;
    let previousNode = null;
    let nextNode = null;
    for (let i = 0; i < index; i++) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      nextNode = currentNode.next;
    }
    previousNode.next = nextNode;
    currentNode.next = null;
    return currentNode;
  }
}

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
