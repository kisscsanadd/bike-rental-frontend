import { Location } from "./location";

export class Bike {
    id: string;
    name: string;
    type: string;
    condition: number;
    hourlyCost: number;
    location: Location;
    isRented: boolean;
}