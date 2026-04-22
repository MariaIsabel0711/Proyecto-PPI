import { obtenerProfesionales} from "../model/ProfesionalesModel";

const getProfesionales = async (req,res) => {
    try{
        const profesionales = await obtenerProfesionales()
        res.status(200).json({
            succes : true,
            data : profesionales
        })

    }catch (error) {
        res.status(500).json({
            succes : false,
            message : "Error al obtener los Profesionales",
            error : error.message
        })
    }
}

export {getProfesionales}