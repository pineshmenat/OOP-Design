import Engine from "./Engine";

export default class LargeEngine implements Engine {
    private _horsePower: number

    constructor(horesePower: number) {
        this._horsePower = horesePower;
    }

    startEngine() {
        console.log("Started large " + this._horsePower + " horsepower engine");
    }
    
}