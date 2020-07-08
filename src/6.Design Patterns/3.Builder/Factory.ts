import Vehicle from "./Vehicle";

let accord: Vehicle = new Vehicle.Builder()
.price(40000)
.type("car")
.model("Accord")
.make("Honda")
.horsePower(1150)
.color("gray")
.doors(4)
.build()

console.log(accord.toString());