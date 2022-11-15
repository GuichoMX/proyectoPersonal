import mysql from "promise-mysql";
import config from "../config/config";
import { createPool } from "mysql2/promise";
import { ROOT_CONFIG_FILENAMES } from "@babel/core/lib/config/files";

const connection = createPool({
    host: config.host,
    database: config.database,
    user: config.user,
    password: config.password
});

// const connection = createPool({
//     host: process.env.HOST,
//     user: process.env.DBUSER,
//     database: process.env.DATABASE,
//     password: process.env.PASSWORD
// })


// const connection = createPool({
//     host: 'localhost',
//     user: 'root',
//     database: 'proyectoPersonal',
//     password: 'Diablitos12'
// })


const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};