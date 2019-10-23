import { Model, ModelYear, Categories, Manufacturer } from "./index";

export class Tariffs {

    id: number;
    manufacturer: Manufacturer;
    category: Categories;
    model: Model;
    modelYear: ModelYear;
    weekday: number; // Fim de semana
    weekdayLoyalty: number; // // Fim de semana com fidelidade
    weekendDay: number; // Diária normal
    weekendDayLoyalty: number; // Diária normal  com fidelidade
    imageBase64: string;
}
