import mysql from 'promise-mysql'
import keys from './routes/keys'

const pool = mysql.createPool(keys.database);
pool.getConnection().then(connection=> {
    pool.releaseConnection(connection);
    console.log('CONECTADO A LA BASE DE DATOS');
});

export default pool;