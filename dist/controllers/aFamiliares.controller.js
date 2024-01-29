"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aFamiliares = void 0;
const aFamiliares_model_1 = __importDefault(require("../models/aFamiliares.model"));
class aFamiliares {
    async getbyExpendiente(req, res) {
        try {
            const { expedienteId } = req.params;
            const aFamiliares = await aFamiliares_model_1.default.findAll({
                where: {
                    expediente_id: expedienteId,
                }
            });
            aFamiliares
                ? res.send(200).json({ message: aFamiliares, details: true })
                : res.send(400).json({ message: "no posee antecedentes familiares", details: true });
        }
        catch (error) {
            console.log(error);
        }
    }
    async createAFamiliares(req, res) {
        try {
            const { expediente_id, hipertension_padre, hipertension_madre, hipertension_otros, diabetes_padre, diabetes_madre, diabetes_otros, gemelos_padre, gemelos_madre, gemelos_otros, cancer_padre, cancer_madre, cancer_otros, otros_enfermedades_padre, otros_enfermedades_madre, otros_enfermedades_otros, } = req.body;
            const dataAFamiliares = {
                expediente_id,
                hipertension_padre,
                hipertension_madre,
                hipertension_otros,
                diabetes_padre,
                diabetes_madre,
                diabetes_otros,
                gemelos_padre,
                gemelos_madre,
                gemelos_otros,
                cancer_padre,
                cancer_madre,
                cancer_otros,
                otros_enfermedades_padre,
                otros_enfermedades_madre,
                otros_enfermedades_otros,
            };
            const created = await aFamiliares_model_1.default.create({ dataAFamiliares });
            created
                ? res.status(200).json({ message: "antecedentes familiares creados " + dataAFamiliares, details: true })
                : res.status(400).json({ message: "error al crear", details: true });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.aFamiliares = aFamiliares;
