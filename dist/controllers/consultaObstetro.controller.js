"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultaObstetro = void 0;
const consultaObstetro_models_1 = __importDefault(require("../models/consultaObstetro.models"));
class consultaObstetro {
    async getConsultasObstetro(req, res) {
        try {
            const consultasObstero = await consultaObstetro_models_1.default.findAll();
            return consultasObstero.length > 0
                ? res.status(200).json({ messaje: consultasObstero, details: true })
                : res
                    .status(400)
                    .json({ messaje: "No existen consultas", details: false });
        }
        catch (error) {
            console.log(error);
        }
    }
    async getAntecedentesPatients(req, res) {
        try {
            const { expedienteId } = req.params;
            const antecedentes = await consultaObstetro_models_1.default.findAll({
                where: {
                    expediente_id: expedienteId,
                },
            });
            antecedentes
                ? res.status(200).json({ message: antecedentes, details: true })
                : res
                    .status(400)
                    .json({ message: "the user has no background", details: false });
        }
        catch (error) {
            console.log(error);
        }
    }
    async createConsultaObstetro(req, res) {
        try {
            const { expediente_id, no, fecha, mareos, nauseas, vomito, flujo, sxUrin, mFetale, otros, } = req.body;
            const data = {
                expediente_id,
                no,
                fecha,
                mareos,
                nauseas,
                vomito,
                flujo,
                sxUrin,
                mFetale,
                otros,
            };
            const created = await consultaObstetro_models_1.default.create(data);
            created
                ? res
                    .status(200)
                    .json({ message: "consult created" + data, details: true })
                : res
                    .status(400)
                    .json({ message: "error al crear", datails: false });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.consultaObstetro = consultaObstetro;
