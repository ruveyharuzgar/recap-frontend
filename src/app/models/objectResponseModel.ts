import { ListModel } from "./listModel";

export interface ObjectResponseModel<T> extends ListModel{
    data:T
}