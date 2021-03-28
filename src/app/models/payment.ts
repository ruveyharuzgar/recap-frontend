import { Car } from "./car";

export class Payment{
    car:Car;
    creditCardNumber?:string;
    expirationDate?:string;
    securityCode?:string;
}