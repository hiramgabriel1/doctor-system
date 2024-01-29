"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aPersonales = void 0;
const aPersonales_model_1 = __importDefault(require("../models/aPersonales.model"));
class aPersonales {
    async getbyExpediente(req, res) {
        try {
            const { expedienteId } = req.query;
            const aPersonalesPatient = await aPersonales_model_1.default.findAll({
                where: {
                    expediente_id: expedienteId
                }
            });
            aPersonalesPatient
                ? res.send(200).json({ messaje: aPersonalesPatient, details: true })
                : res.send(400).json({ messaje: 'el paciente  no tiene antecedentes personales', details: false });
        }
        catch (error) {
            console.log(error);
        }
    }
    async createAPersonales(req, res) {
        try {
            const { expediente_id, hipertension, tx_hipertension, endocrinos, tx_endocrinos, alergias, tx_alergias, transfuciones, tx_tranfuciones, otros, tx_otros, } = req.body;
            const dataAPersonales = {
                expediente_id,
                hipertension,
                tx_hipertension,
                endocrinos,
                tx_endocrinos,
                alergias,
                tx_alergias,
                transfuciones,
                tx_tranfuciones,
                otros,
                tx_otros,
            };
            const created = await aPersonales_model_1.default.create({ dataAPersonales });
            created
                ? res.status(200).json({ message: 'antecedentes personales creados' + dataAPersonales, details: true })
                : res.status(400).json({ message: 'internal server error', details: false });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.aPersonales = aPersonales;
