//basic
let id: number = 5
let company: string ='Moyowa'
let isPusblished: boolean = true
let x: any ="Hello"

let ids:number[] = [1,2,3,4,5]

let arr: any[] = [1, true, 'Hello']


//tuple

let person: [number, string, boolean] = [1, 'Moyowa', true]


//tuple array

let employee: [ number, string][]

employee= [
    [1, 'brad'],
    [2, 'moyowa']
]


//unions 
let pid: string | number = 22


//enum
enum Direction1 {
    up,
    down,
    left,
    right
}

//objets
type user = {
    id:number,
    name:string
}


const user: user= {
    id:1,
    name: 'Moyowa'
}


//type assertion
let cid: any = 1 
// let customerId = <number>cid

let customerId = cid as number


//funvtions
function addNum(x: number , y: number):number  {
    return x + y
}

function log(message: string | number): void {
    console.log(message)
}


//interfaces
interface userInterface {
    id:number,
    name:string
    age?:number
}


const user1: userInterface= {
    id:1,
    name: 'Moyowa'
}

type Point = number | string 
const p1: Point = 1



interface Mathfunc {
    (x:number, y:number) :number
}



const add: Mathfunc = (x:number, y: number): number => x + y
const sub: Mathfunc = (x:number, y:number):number => x - y



interface PersonInterface {
    id:number,
    name:string
    register(): string
}


//class
class Person implements PersonInterface {
    id:number
    name:string

    constructor(id:number, name: string) {
       this.id = id
       this.name = name
    }


    register() {
        return `${this.name} is now registered`
    }


}




const moyowa = new Person(1, 'Moyowa')
const John = new Person(2, 'mike')

//subclasses
class Employee extends Person {
    position: string

    constructor(id: number, name:string, position:string) {
        super(id,name)
        this.position = position
  
    }
}


const emp = new Employee(3, 'Peter', 'developer')

console.log(moyowa.register())

console.log(emp.register())

moyowa.id = 5



//generics 
function getArray<T>(items: T[]): T[] {
    return new Array().concat(items)
}

const numArray = getArray<number>([1,2,3,4])
const strArray = getArray<string>(['brad','will','smith'])




const eligiblity:number = 20 

if (eligiblity >= 20){
    console.log("you can vote")
}
else{
    console.log("you cant vote")
}


//tuple

let Persoo: {name:string,age:number, agee:number} = {name:"Moyowa", age:20, agee:20}


console.log(Persoo.name )


//test
const companies:any[] = [
    {name: "Company One", category: "Finance", start:1981, end:2003},
    {name: "Company Two", category: "Marketing", start:1981, end:2007},
    {name: "Company Three", category: "Banking", start:1921, end:2015},
    {name: "Company Four", category: "Insurance", start:1981, end:2013},
    {name: "Company Five", category: "Finance", start:1951, end:2003},
    {name: "Company Six", category: "Auto", start:1971, end:2003},
    {name: "Company Seven", category: "Retail", start:1991, end:1992},
    {name: "Company Eight", category: "Finance", start:1999, end:2012},
    {name: "Company Nine", category: "Retail", start:1980, end:2002},
    {name: 'Company Ten', category: "Tech", start:1999, end:2012},
   
]

const ages:number[] = [33,12,20,16,5,54,21,44,61,13,15,45,25,64,32];

//for each

// companies.forEach(function(company){
//     console.log(company.name)
// })

//for Each with arrow function
companies.forEach(company => {
    console.log(company.name)
}
)


//filter
const filteredcompany:any[] = companies.filter(function(company){
    return company.category === 'Finance'
}
)

console.log(filteredcompany)

//sort ages

const sorted = ages.sort(function(a:number,b:number) {
    return a - b
})

console.log(sorted)

//sprt companies by start year
const sortedcompanies = companies.sort(function(company1:any,company2:any){
    if (company1.start > company2.start){
        return 1
    }
    else{
        return -1
    }
})

console.log(sortedcompanies)

//reduce ages

const agesum = ages.reduce(function(total:number,age:number){
    return total + age
}
)

console.log(agesum)

//map
const companynames:any[] = companies.map(function(company){
    return company.name
}
)

console.log(companynames.toString())

//add x and y 

const a:number = 10;
let b:number = 20

function join (a:number, b:number):number {
    return a + b
}

console.log(join(a,b))


const talk = (message:string | number):void => {
    console.log(message)
}
talk('hello')


//intefaces 


interface Precious {
    id:number,
    name:string
}

const Precious1: Precious = {
    id:1,
    name: 'precious'
}

console.log(Precious1.name)


interface DeveloperInterface {
    id:number,
    name:string,
    languages:any[]
    age?:number
}

const Moyowa: DeveloperInterface = {
    id:1,
    name: 'Moyowa',
    languages: ['html','css','javascript']

}



console.log(Moyowa.languages, Moyowa.name)

interface blah {
    (f:number, s:number):number
}


const check: blah = (f:number, s:number): number => f+s

console.log(check)


class aNigga {
    id:number
    name:string


    constructor(id:number, name:string) {
        this.id = id
        this.name = name
    }
}

const Peter = new aNigga(1, 'Peter')

console.log(Peter.name)

//interface
interface CompanyInterface {
    id?:number,
    name?:string
    region?:string,
    register(): string
}
//class 
class place implements CompanyInterface {
    id?:number
    name?:string
    region?:string

    constructor(id:number, name:string,region:string) {
        this.id = id
        this.name = name
        this.region = region
    }
    register() {
        return `${this.name} is a company`
    }


}

const moyowaCompany = new place(1,'M-technologies','Nigeria')
const preciousCompany = new place(1,'Ugochi','Lagos')


console.log(moyowaCompany.register(), preciousCompany.register())

//subclass
class placeSubClass extends place {
    revenue: string

    constructor(id:number, name:string,region:string, revenue:string) {
        super(id,name,region)
        this.revenue = revenue
    }



}

const rev = new placeSubClass(4,'Peter','Dubai','3.3billion')

console.log(rev.name, rev.register())


//generics 
function showArray<T>(items:T[]): T[] {
    return new Array().concat(items)
}

let numberArray = showArray<number>([1,2,3,4,5])
let stringArray = showArray<string>(['Moyowa','Peter'])


stringArray.push('1')
console.log(stringArray)


