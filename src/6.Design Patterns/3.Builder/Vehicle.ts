class Vehicle {
    private _price:number;
    private _type: string;
    private _make: string;
    private _horsePower: number;
    private _model: string;
    private _color: string;
    private _doors: number;
    
    constructor(builder: Vehicle.Builder) {
        this._price = builder._price;
        this._type = builder._type;
        this._make = builder._make;
        this._horsePower = builder._horsePower;
        this._model = builder._model;
        this._color = builder._color;
        this._doors = builder._doors;
    }

    /**
     * toString
     */
    public toString() {
        return `[ type: ${this._type}, make: ${this._make}, model: ${this._model}, price: ${this._price}, doors: ${this._doors}, color: ${this._color}, horsePower: ${this._horsePower}]`;
    }
}

namespace Vehicle {
    export class Builder {
        public _price: number;
        public _type: string;
        public _make: string;
        public _horsePower: number;
        public _model: string;
        public _color: string;
        public _doors: number;

        public price(value: number): Builder {
            this._price = value;
            return this;
        }

        public type(value: string): Builder {
            this._type = value;
            return this;
        }

        public make(value: string): Builder {
            this._make = value;
            return this;
        }

        public horsePower(value: number): Builder {
            this._horsePower = value;
            return this;
        }

        public model(value: string): Builder {
            this._model = value;
            return this;
        }

        public color(value: string): Builder {
            this._color = value;
            return this;
        }

        public doors(value: number): Builder {
            this._doors = value;
            return this;
        }

        /**
         * build
         */
        public build(): Vehicle {
            return new Vehicle(this);
        }
    }
}

export default Vehicle;