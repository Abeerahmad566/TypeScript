import { HasFormatter } from "../interface/HasFromatter" 
export class Payments implements HasFormatter {
    constructor(
        readonly recipient:string,
        public amount:number,
        private details:string){}
    format()
    {
        return (`${this.recipient} is owed ${this.amount} for ${this.details}`)
    }
}