class Query {
    _queryObject: object = {};

    constructor() {
        this._queryObject["query"] = {}
    }

    /**
     * toString
     */
    public toString() {
        return JSON.stringify(this._queryObject, null, 2);
    }
}
export default Query;