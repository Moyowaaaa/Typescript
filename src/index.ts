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


