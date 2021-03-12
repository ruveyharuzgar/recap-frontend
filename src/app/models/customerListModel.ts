import { Customer } from "./customer";
import { ListModel } from "./listModel";

export interface CustomerListModel extends ListModel{
    data:Customer[]
}