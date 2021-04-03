import { Car } from "./car";
import { Rental } from "./rental";

export class Payment{
    car:Car;
    rental:Rental;
    creditCardNumber?:string;
    expirationDate?:string;
    securityCode?:string;
    firstName:string;
    lastName:string;
}