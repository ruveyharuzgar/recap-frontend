import { ListModel } from "./listModel";
import { Rental } from "./rental";

export interface RentalListModel extends ListModel{
    data:Rental[]
}