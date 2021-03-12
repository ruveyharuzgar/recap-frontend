import { Color } from "./color";
import { ListModel } from "./listModel";

export interface ColorListModel extends ListModel{
    data:Color[]
}