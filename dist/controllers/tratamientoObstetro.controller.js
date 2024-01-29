"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.tratamientoObstetroController = void 0;
const tratamientoObstetro_model_1 = __importDefault(require("../models/tratamientoObstetro.model"));
class tratamientoObstetroController {
    async getTratamientosByExpediente(req, res) {
        try {
            const { expedienteId } = req.params;
            const tratamientos = await tratamientoObstetro_model_1.default.findAll({ where: { expediente_id: expedienteId } });
            tratamientos
                ? res.status(200).json({ messaje: tratamientos, details: true })
                : res.status(400).json({ messaje: "no posee tratamientos", details: false });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.tratamientoObstetroController = tratamientoObstetroController;
