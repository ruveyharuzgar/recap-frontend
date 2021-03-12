import { Car } from "./car";
import { ListModel } from "./listModel";

export interface CarListModel extends ListModel{
    data:Car[]
}