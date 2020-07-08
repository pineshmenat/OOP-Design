import { HouseBuilder } from './house-builder';

export class House {
    address: string;
    floorNumber: number;
    isHavingParking: boolean;
    isHavingGarden: boolean;
    constructor(houseBuilder: HouseBuilder) {
        this.address = houseBuilder.address;
        this.floorNumber = houseBuilder.floorNumber;
        this.isHavingParking = houseBuilder.isHavingParking;
        this.isHavingGarden = houseBuilder.isHavingGarden;
    }
}