export default class Employee {
    private id: number
    name: string 
    department: string
    working: boolean

    constructor(id= 0, name= "Employee1", department="IT", working=false) {
        this.id = id,
        this.name = name,
        this.department = department,
        this.working = working
    }

    /**
     * toString
     */
    public toString() {
        return `Employee of ID: ${this.id} with name: ${this.name} from department: ${this.department} with workingStatus: ${this.working}`
    }
}