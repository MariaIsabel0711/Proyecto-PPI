import {getProfesionales}from "../controller/ProfesionalesController.js"
import express from 'express'

const router = express.Router()

router.get("/profesionales",getProfesionales)

export default route