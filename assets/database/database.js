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

const getConnection = () => {
    return connection;
}

module.exports = {
    getConnection
};