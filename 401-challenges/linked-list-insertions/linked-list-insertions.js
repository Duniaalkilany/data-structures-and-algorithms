"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(value) {
    const node = new Node(value);
    if (this.head) {
      node.next = this.head;
    }
    this.head = node;
  }

  includes(value) {
    let result;
    let newNode = this.head;
    while (newNode.next) {
      if (value == newNode.value) {
        result = true;
        return result;
      } else {
        newNode = newNode.next;
      }
    }
    result = false;
    return result;
  }

  toString() {
    let string = "";
    let newNode = this.head;
    while (newNode) {
      string += `{ ${newNode.value} } -> `;
      newNode = newNode.next;
    }
    string += `NULL`;
    return string;
  }

  append(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
    } else {
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      currentNode.next = node;
    }
  }

  insertBefore(value, newValue) {
    let newNode = this.head;
    const node = new Node(newValue);
    if (newNode.value === value) {
      node.next = this.head;
      this.head = node;
    } else {
      while (newNode.next) {
        if (newNode.next.value === value) {
          node.next = newNode.next;
          newNode.next = node;
          break;
        } else {
          newNode = newNode.next;
        }
      }
    }
  }

  insertAfter(value, newValue) {
    let newNode = this.head;
    const node = new Node(newValue);
    while (newNode) {
      if (newNode.value === value) {
        node.next = newNode.next;
        newNode.next = node;
        break;
      }
      newNode = newNode.next;
    }
  }
}

module.exports = LinkedList;