export interface Payment{
    id?:number,
    customerId:number;
    creditCardNumber:string;
    price:number;
    expirationDate:string;
    securityCode:string;
}