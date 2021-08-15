"use strict";

let LinkedList = require("../linked-list-insertions");

describe("linked-list insertion ", () => {
  it(" Can successfully add a node to the end of the linked list", () => {
    let newList = new LinkedList();
    newList.append("test1");
    expect(newList.head.value).toEqual("test1");
    expect(newList.head.next).toBeNull();
  });

  it("add multiple nodes to the end of a linked list", () => {
    let newList = new LinkedList();
    newList.append("test1");
    newList.append("test2");
    newList.append("test3");
    expect(newList.head.value).toEqual("test1");
 
    expect(newList.head.next.value).toEqual("test2");
    expect(newList.head.next.next.value).toEqual("test3");
    expect(newList.head.next.next.next).toBeNull();
  });

  it("Can successfully insert a node before a node located i the middle of a linked list", () => {
    let newList = new LinkedList();
    newList.insert("test3");
    newList.insert("test2");
    newList.insert("test1");
    newList.insertBefore("test2", "test4");
    expect(newList.head.value).toEqual("test1");
    expect(newList.head.next.value).toEqual("test4");
    expect(newList.head.next.next.value).toEqual("test2");
    expect(newList.head.next.next.next.value).toEqual("test3");
    expect(newList.head.next.next.next.next).toBeNull();
  });

  it("Can successfully insert a node before the first node of a linked list ", () => {
    let newList = new LinkedList();
    newList.insert("test2");
    newList.insert("test1");
    newList.insertBefore("test1", "test3");
    expect(newList.head.value).toEqual("test3");
    expect(newList.head.next.value).toEqual("test1");
    expect(newList.head.next.next.value).toEqual("test2");
    expect(newList.head.next.next.next).toBeNull();
  });

  it("Can successfully insert after a node in the middle of the linked list", () => {
    let newList = new LinkedList();
    newList.insert("test3");
    newList.insert("test2");
    newList.insert("test1");
    newList.insertAfter("test2", "test4");
    expect(newList.head.value).toEqual("test1");
    expect(newList.head.next.value).toEqual("test2");
    expect(newList.head.next.next.value).toEqual("test4");
    expect(newList.head.next.next.next.value).toEqual("test3");
    expect(newList.head.next.next.next.next).toBeNull();
  });

  it("Can successfully insert a node after the last node of the linked list", () => {
    let newList = new LinkedList();
    newList.insert("test2");
    newList.insert("test1");
    newList.insertAfter("test2", "test3");
    expect(newList.head.value).toEqual("test1");
    expect(newList.head.next.value).toEqual("test2");
    expect(newList.head.next.next.value).toEqual("test3");
    expect(newList.head.next.next.next).toBeNull();
  });
});