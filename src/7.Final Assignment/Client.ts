import QueryBuilder from "./QueryBuilder";
import Query from "./Query";

let builder: QueryBuilder = new QueryBuilder();

let query: Query = new Query();
builder.query = query;
builder.bool().shouldMatch("lot_number", 307).bool().mustMatch("expiry_date", "Jan 2020");
console.log(query.toString());

let anotherQuery: Query = new Query();
builder.query = anotherQuery;
builder.bool().mustMatch("item", "Milk").mustMatch("item_type", "Dairy");
builder.bool().shouldMatch("product_location", "New Mexico").shouldMatch("warehouse_number", 37);
console.log(anotherQuery.toString());