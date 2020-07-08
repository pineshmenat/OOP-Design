import Bool from "./Bool";
import Query from "./Query";

export default class QueryBuilder{
    private _bool: Bool;
    private _query: Query;
    
    public get query(): Query {
        return this._query;
    }
    public set query(value: Query) {
        this._query = value;
        this._bool = null;
    }

    public bool(): Bool {
        if(!this._query) throw new Error("Please set Query obj first");
        if(!this._bool) {
            this._bool = new Bool();
            this._query._queryObject["query"]["bool"] = this._bool.boolObj;
        }
        return this._bool;
    }
}