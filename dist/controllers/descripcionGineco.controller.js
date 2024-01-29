"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.descripcionGineco = void 0;
const descripcionGineco_model_1 = __importDefault(require("../models/descripcionGineco.model"));
class descripcionGineco {
    async getDescipcionGinecobyExpediente(req, res) {
        try {
            const { expedienteId } = req.body;
            const descripcionGineco = await descripcionGineco_model_1.default.findAll({
                where: {
                    expediente_id: expedienteId
                }
            });
            descripcionGineco
                ? res.status(200).json({ message: descripcionGineco, details: true })
                : res.status(400).json({ message: "El usuario con expediente" + expedienteId + "no tiene descripciones ginecológicas" });
        }
        catch (error) {
            console.log(error);
        }
    }
    async createDescripcionGineco(req, res) {
        const { expediente_id, us, motivo, padecimientos } = req.body;
        const data = {
            expediente_id,
            us,
            motivo,
            padecimientos
        };
        const created = await descripcionGineco_model_1.default.create({ data });
        created
            ? res.status(200).json({ message: created, details: true })
            : res.status(400).json({ message: "error al crear el recurso", details: false });
    }
}
exports.descripcionGineco = descripcionGineco;
