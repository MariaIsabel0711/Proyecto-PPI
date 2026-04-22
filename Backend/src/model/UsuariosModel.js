import{sql,poolConnect} from "../config/db.js"

const obtenerUsuarios = async(req, res) =>{
    try{
        const con = await poolConnect
        const result = await con.request().execute('sp_ObtenerUsuarios')
        return result.recordset
    }catch(error){
        throw error
    }
}
export {obtenerUsuarios}