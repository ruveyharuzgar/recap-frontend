export interface Payment{
    id?:number,
    customerId:number;
    creditCardNumber:string;
    expirationDate:string;
    securityCode:string;
}