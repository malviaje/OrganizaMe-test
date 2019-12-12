import mysql from 'promise-mysql';

import keys from './keys';

const pool = mysql.createPool(keys.database); //Conecta a database

pool.getConnection() //corregir --> error npm i promise-mysql@3.3.1
    .then(Connection =>{
        pool.releaseConnection(Connection);
        console.log('DB Conectada');
    });

export default pool;