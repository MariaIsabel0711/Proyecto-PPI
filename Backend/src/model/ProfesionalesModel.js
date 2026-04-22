import{sql,poolConnect} from "../config/db.js"

const obtenerProfesionales = async(req, res) =>{
    try{
        const con = await poolConnect
        const result = await con.request().execute('sp_ObtenerProfesionales')
        return result.recordset
    }catch(error){
        throw error
    }
}
export {obtenerProfesionales}