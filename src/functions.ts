let greet :Function;

greet=()=>{
    console.log("Hello check 123");
}
greet()

//c?:number|string question mark for optional
//c:number|string = 10 default value if not provided
let add =(a:number,b:number,c:number|string =10) =>{
console.log(a+b)
console.log(c)
}
add(3,4)

let minus =(a:number,b:number):number=>{
    return a-b;
}
let result = minus(5,6)
console.log(result)


const logDetails = (name:string,uid:string|number)=>{
console.log(`${name} has uid of ${uid} without type`)
}

const userDetails = (user:{name:string,uid:string|number})=>{
console.log(`${user.name} says hello without type`)
}
logDetails("abeer",1)
userDetails({name:"abeer",uid:"1"})

type stringOrNumber = string|number;
type userObject = {
    name:string,
    uid:stringOrNumber
}

const logDetailsWithType = (name:string,uid:stringOrNumber)=>{
    console.log(`${name} has uid of ${uid} with type`)
    }
    
const userDetailsWithType = (user:userObject)=>{
    console.log(`${user.name} says hello with type` )
    }

logDetailsWithType("ABEER",1)
userDetailsWithType({name:"ABEER",uid:"2"})

let greetTen:(a:string,b:string)=> void;

greetTen=(name:string,greetings:string)=>{
    console.log(name,greetings)
}

greetTen("abeer","hello");


let cal:(a:number,b:number,action:string)=> number;

cal =  (numOne: number, numTwo: number, action: string)=> {
    if (action === "add") {
        return numOne + numTwo;
    }
    return numOne - numTwo;
}

console.log(cal(1,2,"add"))

let logDetailsTen:(obj:{name:string,age:number})=> void;

type person = {name:string,age:number}

logDetailsTen = (abeer:person)=>{
    console.log(`${abeer.name} is ${abeer.age} years old`)
}

logDetailsTen({name:"abeer",age:22})