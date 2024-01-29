"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.fichaIdentificacion = void 0;
const fichaIdentificacion_model_1 = __importDefault(require("../models/fichaIdentificacion.model"));
class fichaIdentificacion {
    async getPatients(req, res) {
        try {
            const patients = await fichaIdentificacion_model_1.default.findAll();
            return patients.length > 0
                ? res.status(200).json({ messaje: patients, details: true })
                : res
                    .status(400)
                    .json({ messaje: "No existen pacientes", details: false });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getPatientsByName(req, res) {
        try {
            const { name } = req.body;
            const patients = await fichaIdentificacion_model_1.default.findOne(name);
            return patients === null
                ? res.status(404).json("usuario no encontrado")
                : res.status(200).json({ response: "encontrado", details: patients });
            //@ts-ignore
            const patientsFiltered = patients.filter(patients.name.toLowerCase().includes(name.toLowerCase()));
            patientsFiltered
                ? res.status(200).json({ messaje: patientsFiltered, details: true })
                : res.status(400).json({
                    messaje: "No existen pacientes con ese nombre o apellido",
                    details: false,
                });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getPatientsFiltred(req, res) {
        try {
            const { filter } = req.params;
            const patients = await fichaIdentificacion_model_1.default.findOne({
                where: { filter: filter },
            });
            patients
                ? res.status(200).json({ messaje: patients, details: true })
                : res.status(400).json({
                    messaje: "No existen pacientes para este tipo de consilta",
                    details: false,
                });
        }
        catch (error) {
            console.log(error);
        }
    }
    async createFichaIdentificacion(req, res) {
        try {
            const { expediente, nombre, apellidoPaterno, apellidoMaterno, edad, fechaIngreso, estadoCivil, calle, colonia, municipio, telefono, celular, tipo, informacionAdicional, } = req.body;
            const dataUser = {
                expediente,
                nombre,
                apellidoPaterno,
                apellidoMaterno,
                edad,
                fechaIngreso,
                estadoCivil,
                calle,
                colonia,
                municipio,
                telefono,
                celular,
                tipo,
                informacionAdicional,
            };
            const createFicha = await fichaIdentificacion_model_1.default.create({ dataUser });
            return createFicha
                ? res
                    .send(200)
                    .json({ messaje: "user created" + dataUser, details: true })
                : res.status(400).json({ message: "Error al crear el user" });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.fichaIdentificacion = fichaIdentificacion;
