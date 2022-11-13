import mysql from "promise-mysql";
import config from "../config/config";
import { createPool } from "mysql2/promise";
import { ROOT_CONFIG_FILENAMES } from "@babel/core/lib/config/files";

// const connection = mysql.createConnection({
//     host: config.host,
//     database: config.database,
//     user: config.user,
//     password: config.password
// });


const connection = createPool({
    host: 'localhost',
    user: 'root',
    database: 'proyectoPersonal',
    password: 'Diablitos12'
})


const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};