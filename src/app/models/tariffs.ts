import { Model, ModelYear, Categories, Manufacturer } from "./index";

export class Tariffs {

    id: number;
    manufacturer: Manufacturer;
    category: Categories;
    model: Model;
    modelYear: ModelYear;
    weekday: number;
    weekdayLoyalty: number;
    weekendDay: number;
    weekendDayLoyalty: number;

}