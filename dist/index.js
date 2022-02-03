"use strict";
//basic
let id = 5;
let company = 'Moyowa';
let isPusblished = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, true, 'Hello'];
//tuple
let person = [1, 'Moyowa', true];
//tuple array
let employee;
employee = [
    [1, 'brad'],
    [2, 'moyowa']
];
//unions 
let pid = 22;
//enum
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 0] = "up";
    Direction1[Direction1["down"] = 1] = "down";
    Direction1[Direction1["left"] = 2] = "left";
    Direction1[Direction1["right"] = 3] = "right";
})(Direction1 || (Direction1 = {}));
const user = {
    id: 1,
    name: 'Moyowa'
};
//type assertion
let cid = 1;
// let customerId = <number>cid
let customerId = cid;
//funvtions
function addNum(x, y) {
    return x + y;
}
function log(message) {
    console.log(message);
}
const user1 = {
    id: 1,
    name: 'Moyowa'
};
const p1 = 1;
const add = (x, y) => x + y;
const sub = (x, y) => x - y;
//class
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
const moyowa = new Person(1, 'Moyowa');
const John = new Person(2, 'mike');
//subclasses
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, 'Peter', 'developer');
console.log(moyowa.register());
console.log(emp.register());
moyowa.id = 5;
//generics 
function getArray(items) {
    return new Array().concat(items);
}
const numArray = getArray([1, 2, 3, 4]);
const strArray = getArray(['brad', 'will', 'smith']);
