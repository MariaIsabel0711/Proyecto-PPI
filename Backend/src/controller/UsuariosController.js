import { obtenerUsuarios} from "../model/UsuariosModel";

const getUsuarios = async (req,res) => {
    try{
        const usuarios = await obtenerUsuarios()
        res.status(200).json({
            succes : true,
            data : usuarios
        })

    }catch (error) {
        res.status(500).json({
            succes : false,
            message : "Error al obtener los usuarios",
            error : error.message
        })
    }
}

export {getUsuarios}