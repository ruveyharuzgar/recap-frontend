export interface Rental {
  id:number;
  carId:number;
  customerId:number;
  companyName:string;
  rentDate:Date;
  returnDate:Date;
  modelName: string;
  customerFirstName: string;
  customerLastName: string;
}
