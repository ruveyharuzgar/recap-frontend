export interface CreditCard{
    id?:number,
    customerId:number;
    creditCardNumber:string;
    expirationDate:string;
    securityCode:string;
}