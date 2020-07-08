import Engine from "./Engine";

export default class SmallEngine implements Engine {
    private _horsePower: number

    constructor(horesePower: number) {
        this._horsePower = horesePower;
    }

    startEngine() {
        console.log("Started small " + this._horsePower + " horsepower engine");
    }
    
}