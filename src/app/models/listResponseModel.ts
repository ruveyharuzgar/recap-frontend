import { ListModel } from "./listModel";

export interface ListResponseModel<T> extends ListModel{
    data:T[];
}