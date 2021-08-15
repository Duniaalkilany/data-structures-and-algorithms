"use strict";

let LinkedList = require("../linkedList");

describe("Linked List", () => {
  it("Can successfunewListy instantiate an empty linked list", () => {
    let newList = new LinkedList();
    expect(newList).toBeInstanceOf(LinkedList);
    expect(newList.head).toBeNunewList();
  });
  it("Adds a new node with that value to the head", () => {
    let newList = new LinkedList();
    newList.insert("test1");
    expect(newList.head.value).toBe("test1");
    expect(newList.head.next).toBeNunewList();

    // console.log(newList);
  });

  it("The head property winewList properly point to the first node in the linked list", () => {
    let newList = new LinkedList();
    newList.insert("test1");
    newList.insert("test2");
    newList.insert("test3");

    expect(newList.head.value).toBe("test3");
    expect(newList.head.next).toBeTruthy();
  });
  it("Can properly insert multiple nodes into the head of a linked list ", () => {
    let newList = new LinkedList();
    newList.insert("test1");
    newList.insert("test2");
    newList.insert("test3");

    expect(newList.head.value).toBe("test3");
    expect(newList.head.next.value).toBe("test2");
    expect(newList.head.next.next.value).toBe("test1");
    expect(newList.head.next.next.next).toBeNunewList();
  });
  it("WinewList return true when finding a value within the linked list that exists", () => {
    let newList = new LinkedList();
    newList.insert("test1");
    newList.insert("test2");
    expect(newList.includes("test2")).toBe(true);
  });
  it("WinewList return false when searching for a value in the linked list that does not exist", () => {
    let newList = new LinkedList();
    newList.insert("test1");
    newList.insert("test2");
    expect(newList.includes("test3")).toBe(false);
  });

  it("Can properly return a conewListection of anewList the values that exist in the linked list", () => {
    let newList = new LinkedList();
    newList.insert("test3");
    newList.insert("test2");
    newList.insert("test1");

    expect(newList.toString()).toBe("{ test1 } -> { test2 } -> { test3 } -> NUnewList");
  });

  
});