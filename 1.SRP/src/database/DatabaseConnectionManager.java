package database;

import java.sql.Connection;
import java.sql.SQLException;

public class DatabaseConnectionManager {
    private Connection conn;
    private static DatabaseConnectionManager databaseConnection;
    private DatabaseConnectionManager() {

    }

    public static DatabaseConnectionManager getManagerInstance() {
        if(databaseConnection == null) {
            databaseConnection = new DatabaseConnectionManager();
        }
        return databaseConnection;
    }

    public void connect() throws SQLException {
//        conn = DriverManager.getConnection("/Somewhere/Connect");
        System.out.println("Connect to DB..");
    }

    public Connection getConnectionObject() {
        return conn;
    }

    public void disconnect() throws SQLException {
//        conn.close();
        System.out.println("Disconnect from db");
    }
}
