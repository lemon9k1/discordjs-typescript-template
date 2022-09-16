import * as mysql from "mysql2/promise";
import "dotenv/config";

export default class CreatePool {
    pool(): mysql.Pool {
      return mysql.createPool({
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        database: process.env.DB_NAME,
        waitForConnections: true,
        connectionLimit: 50,
        queueLimit: 0,
      });
    }
  }

  export const pool = new CreatePool().pool();