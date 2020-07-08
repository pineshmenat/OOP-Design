import Must from "./Must";
import Should from "./Should";
import Match from "./Match";

export default class Bool{
    private _boolObj: object = {};
    private _should: Should;
    private _must: Must;
    
    public get boolObj(): object {
        return this._boolObj;
    }
    public set boolObj(value: object) {
        this._boolObj = value;
    }

    shouldMatch(key: string, value: any): Should {
        if(!this._should) {
            this._should = new Should();
            this._boolObj["should"] = this._should.shouldObj
        }
        this._should.addMatch(new Match(key, value));
        return this._should;
    }

    mustMatch(key: string, value: any): Must {
        if(!this._must) {
            this._must = new Must();
            this._boolObj["must"] =  this._must.mustObj;
        }
        this._must.addMatch(new Match(key, value));
        return this._must;
    }

    /**
     * toString
     */
    public toString() {
        return this._boolObj;
    }
}