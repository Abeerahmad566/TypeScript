import { HasFormatter } from "../interface/HasFromatter" 
export class Invoice implements HasFormatter {
    constructor(
        readonly client:string,
        public amount:number,
        private details:string){}
    format()
    {
        return (`${this.client} owes ${this.amount} for ${this.details}`)
    }
}