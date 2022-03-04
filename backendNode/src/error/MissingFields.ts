import { BaseError } from "./BaseError";

export class MissingFields extends BaseError {
    constructor(){
        super("Complete all fields")
    }
}