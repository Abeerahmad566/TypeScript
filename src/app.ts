// interface isPerson{
//     name:string;
//     age:number;
//     speak(a:string):void;
//     spend(b:number):number;
// }

// const me :isPerson={
//     name:"Abeer",
//     age:22,
//     speak(text:string):void{
//         console.log(text)
//     }
//     ,
//     spend(amount:number):number{
//         console.log(amount)
//         return amount;
//     }
// }

// const greetInterfacePerson=(person:isPerson)=>{
//     console.log(person.name)

// }
// greetInterfacePerson(me);

//  

import { Invoice } from "./classes/Invoice.js";
import { ListTemplates } from "./classes/ListTemplates.js";
import { Payments } from "./classes/Payments.js";
import { HasFormatter } from "./interface/HasFromatter.js";


const form= document.querySelector(".new-item-form") as HTMLFormElement

console.log(form.children);

//inputFields

const type = document.querySelector("#type") as HTMLSelectElement;


const tofrom = document.querySelector("#tofrom") as HTMLInputElement;


const details = document.querySelector("#details") as HTMLInputElement;


const amount = document.querySelector("#amount") as HTMLInputElement;

const ul = document.querySelector('ul')!;
const list = new ListTemplates(ul);

form.addEventListener('submit',(e:Event)=>{
    e.preventDefault();
    let values:[string,number,string]
    values=[tofrom.value,amount.valueAsNumber,details.value]
let doc :HasFormatter;
if(type.value==="invoice"){
    doc = new Invoice(...values)
}
else {
    doc = new Payments(...values)
}
   list.render(doc,type.value,'end')

})

//GENERICS 
//must be an object
//<T> captures the properties we passes to the function
//<T> extends object means whatever we passes to the function must have a object
//<T> extends {name:string} means whatever we passes to the function must have a name in the object
const AddUid = <T extends object>(obj:T)=>{
    let uid = Math.floor(Math.random() * 1000)
return {...obj,uid};
}

let docOneGeneric = AddUid({name:'abeer',age:22});

console.log(docOneGeneric)
//ENUMS
//specify a number against a const 
enum ResourceType {BOOK,AUTHOR,FILM}


//Generics with interface
interface Resource <T>{
    uid:ResourceType,
    Resourcename:string,
    date:T
}
const docOneGenericWithInterface :Resource <string> = {
    uid:1,
    Resourcename:'abeer',
    date:"03/10/2022"
}

//WITH ENUM
const docOneGenericWithInterfaceandEnum :Resource <string> = {
    uid:ResourceType.BOOK,
    Resourcename:'abeer',
    date:"03/10/2022"
}
console.log({docOneGenericWithInterfaceandEnum})

// tuples
//types are fixed once we defined them 

let tup:[string,number,boolean]=["abeer",20,true]