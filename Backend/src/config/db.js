import sql from 'mssql'
import dotenv from 'dotenv'

dotenv.config()

const StringCon = {
    user : process.env.USER,
    password : process.env.PASSWORD,
    server : process.env.SERVER,
    database : process.env.DATABASE,
    Option:{
        trustServerCertificate : true
    }

}

const poolConnect = new sql.ConnectionPool(StringCon)
.connect()
.then(conn => {
    console.log('Conectados a la base de datos')
    return conn
})

.catch(error => {
    console.log('Error de conexion a la bd' + error)
})

export {sql, poolConnect}