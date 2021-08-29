"use strict";

const Node = require("./node");

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0
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
     // creates a new node
    const node = new Node(value);
    //(!this.head===> this.head ==null ====> list is empty)
    //if list is Empty add the element(new node that i created) and make it head
    if (!this.head) {
      this.head = node;
    } else {
      //else if the list is not empty  iterate to the end of the list
      let currentNode = this.head;
      while (currentNode.next) {
        currentNode = currentNode.next;
      }
      //add node 
      currentNode.next = node;
    }  
    this.size++;             
  }
  //use insert before and insert after to insert element at the position index of the list
  //insert newvalue before this value , 
  insertBefore(value, newValue) {
    // put head value in the newNode
    let newNode = this.head;
    //create node for the new value which i want to add 
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