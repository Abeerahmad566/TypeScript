// const character = 'mario';
// console.log(character);

const inputs = document.querySelectorAll('input');

console.log(inputs)

const cric = (diameter : number) =>{
    return diameter*Math.PI
}

console.log(cric(2))

let mixed = ['abeer',3]

mixed.push(4)

console.log(mixed)

let abeer = {
    name:'abeer',
    belt:'black',
    age:22,
}

// abeer.name=10

let character:string;

let array:string[];

array=['abeer']

// let array:string []=[];
array.push('muneeb')


let mixedArray:(string|number|boolean)[]=[];


let uid: number|string;

let object:object;
object=[]; //array is also a somekind of object
object={};

let objecTwo :{
    name:string,
    belt:string,
    age:number
}

objecTwo= {
        name:'abeer',
        belt:'black',
        age:30,
        // skills:"check"
}

let age:any = 22;
console.log({age})

age=true
console.log({age})
age='twentyTwo';
console.log({age});


age={
    name:'abeer',
    age:20,
}
console.log({age})

let mixedArrayTwo : any=[];

mixedArrayTwo.push(22);
mixedArrayTwo.push('twentyTwo');
mixedArrayTwo.push(true);

console.log(mixedArrayTwo);


let mixedObject :{
    name:any,
    age:any,
}

mixedObject={name:"abeer",age:"twentyTwo"}
console.log(mixedObject);

mixedObject={name:abeer,age:33} //Assigning name a object
console.log(mixedObject);