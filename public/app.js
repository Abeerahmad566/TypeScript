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
const form = document.querySelector(".new-item-form");
console.log(form.children);
//inputFields
const type = document.querySelector("#type");
const tofrom = document.querySelector("#tofrom");
const details = document.querySelector("#details");
const amount = document.querySelector("#amount");
const ul = document.querySelector('ul');
const list = new ListTemplates(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let values;
    values = [tofrom.value, amount.valueAsNumber, details.value];
    let doc;
    if (type.value === "invoice") {
        doc = new Invoice(...values);
    }
    else {
        doc = new Payments(...values);
    }
    list.render(doc, type.value, 'end');
});
//GENERICS 
//must be an object
//<T> captures the properties we passes to the function
//<T> extends object means whatever we passes to the function must have a object
//<T> extends {name:string} means whatever we passes to the function must have a name in the object
const AddUid = (obj) => {
    let uid = Math.floor(Math.random() * 1000);
    return Object.assign(Object.assign({}, obj), { uid });
};
let docOneGeneric = AddUid({ name: 'abeer', age: 22 });
console.log(docOneGeneric);
//ENUMS
//specify a number against a const 
var ResourceType;
(function (ResourceType) {
    ResourceType[ResourceType["BOOK"] = 0] = "BOOK";
    ResourceType[ResourceType["AUTHOR"] = 1] = "AUTHOR";
    ResourceType[ResourceType["FILM"] = 2] = "FILM";
})(ResourceType || (ResourceType = {}));
const docOneGenericWithInterface = {
    uid: 1,
    Resourcename: 'abeer',
    date: "03/10/2022"
};
//WITH ENUM
const docOneGenericWithInterfaceandEnum = {
    uid: ResourceType.BOOK,
    Resourcename: 'abeer',
    date: "03/10/2022"
};
console.log({ docOneGenericWithInterfaceandEnum });
// tuples
//types are fixed once we defined them 
let tup = ["abeer", 20, true];
