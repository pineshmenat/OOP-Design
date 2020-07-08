import { House } from './house';

export class HouseBuilder {

    private readonly _address: string;
    private _floorNumber: number = 0;
    private _isHavingParking: boolean = false;
    private _isHavingGarden: boolean = false;

    constructor(address: string) {
        this._address = address;
    }

    setFloor(floor: number) {
        this._floorNumber = floor;
        return this;
    }

    makeParking() {
        this._isHavingParking = true;
        return this;
    }

    makeGarden() {
        this._isHavingGarden = true;
        return this;
    }

    build() {
        return new House(this);
    }

    get isHavingParking() {
        return this._isHavingParking;
    }

    get isHavingGarden() {
        return this._isHavingGarden;
    }

    get address() {
        return this._address;
    }

    get floorNumber() {
        return this._floorNumber;
    }

}