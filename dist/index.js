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
const eligiblity = 20;
if (eligiblity >= 20) {
    console.log("you can vote");
}
else {
    console.log("you cant vote");
}
//tuple
let Persoo = { name: "Moyowa", age: 20, agee: 20 };
console.log(Persoo.name);
//test
const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2003 },
    { name: "Company Two", category: "Marketing", start: 1981, end: 2007 },
    { name: "Company Three", category: "Banking", start: 1921, end: 2015 },
    { name: "Company Four", category: "Insurance", start: 1981, end: 2013 },
    { name: "Company Five", category: "Finance", start: 1951, end: 2003 },
    { name: "Company Six", category: "Auto", start: 1971, end: 2003 },
    { name: "Company Seven", category: "Retail", start: 1991, end: 1992 },
    { name: "Company Eight", category: "Finance", start: 1999, end: 2012 },
    { name: "Company Nine", category: "Retail", start: 1980, end: 2002 },
    { name: 'Company Ten', category: "Tech", start: 1999, end: 2012 },
];
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];
//for each
// companies.forEach(function(company){
//     console.log(company.name)
// })
//for Each with arrow function
companies.forEach(company => {
    console.log(company.name);
});
//filter
const filteredcompany = companies.filter(function (company) {
    return company.category === 'Finance';
});
console.log(filteredcompany);
//sort ages
const sorted = ages.sort(function (a, b) {
    return a - b;
});
console.log(sorted);
//sprt companies by start year
const sortedcompanies = companies.sort(function (company1, company2) {
    if (company1.start > company2.start) {
        return 1;
    }
    else {
        return -1;
    }
});
console.log(sortedcompanies);
//reduce ages
const agesum = ages.reduce(function (total, age) {
    return total + age;
});
console.log(agesum);
//map
const companynames = companies.map(function (company) {
    return company.name;
});
console.log(companynames.toString());
//add x and y 
const a = 10;
let b = 20;
function join(a, b) {
    return a + b;
}
console.log(join(a, b));
const talk = (message) => {
    console.log(message);
};
talk('hello');
const Precious1 = {
    id: 1,
    name: 'precious'
};
console.log(Precious1.name);
const Moyowa = {
    id: 1,
    name: 'Moyowa',
    languages: ['html', 'css', 'javascript']
};
console.log(Moyowa.languages, Moyowa.name);
const check = (f, s) => f + s;
console.log(check);
class aNigga {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
}
const Peter = new aNigga(1, 'Peter');
console.log(Peter.name);
//class 
class place {
    constructor(id, name, region) {
        this.id = id;
        this.name = name;
        this.region = region;
    }
    register() {
        return `${this.name} is a company`;
    }
}
const moyowaCompany = new place(1, 'M-technologies', 'Nigeria');
const preciousCompany = new place(1, 'Ugochi', 'Lagos');
console.log(moyowaCompany.register(), preciousCompany.register());
//subclass
class placeSubClass extends place {
    constructor(id, name, region, revenue) {
        super(id, name, region);
        this.revenue = revenue;
    }
}
const rev = new placeSubClass(4, 'Peter', 'Dubai', '3.3billion');
console.log(rev.name, rev.register());
//generics 
function showArray(items) {
    return new Array().concat(items);
}
let numberArray = showArray([1, 2, 3, 4, 5]);
let stringArray = showArray(['Moyowa', 'Peter']);
stringArray.push('1');
console.log(stringArray);
