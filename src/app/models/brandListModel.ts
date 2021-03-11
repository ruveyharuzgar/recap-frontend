import { Brand } from "./brand";
import { ListModel } from "./listModel";

export interface BrandListModel extends ListModel{
    data:Brand[]
}