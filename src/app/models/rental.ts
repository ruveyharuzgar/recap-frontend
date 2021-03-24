export interface Rental{
    id?:number,
    carId:number;
    customerId:number;
    price:number;
    rentDate:Date;
    returnDate?:Date;
}