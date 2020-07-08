export default class DatabaseConnectionManager {
    static manager = new DatabaseConnectionManager();

    constructor() {
        
    }

    static getManagerInstance(): DatabaseConnectionManager {
        return DatabaseConnectionManager.manager;
    }

    connect(): void {
        console.log("Connected to DB");
    }

    disconnect(): void {
        console.log("DB Disconnected..")
    }

    getConnectionObject() {
        console.log("Connection Object Sent")
    }
}