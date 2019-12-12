"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const promise_mysql_1 = __importDefault(require("promise-mysql"));
const keys_1 = __importDefault(require("./keys"));
const pool = promise_mysql_1.default.createPool(keys_1.default.database); //Conecta a database
pool.getConnection() //corregir --> error npm i promise-mysql@3.3.1
    .then(Connection => {
    pool.releaseConnection(Connection);
    console.log('DB Conectada');
});
exports.default = pool;
