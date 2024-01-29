"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.consultaGineco = void 0;
const consultaGineco_model_1 = __importDefault(require("../models/consultaGineco.model"));
class consultaGineco {
    async updateConsult(req, res) {
        try {
            const { no, fecha, motivo, padecimiento } = req.body;
            const consultData = {
                no,
                fecha,
                motivo,
                padecimiento,
            };
            const [created] = await consultaGineco_model_1.default.findOrCreate({
                where: {
                    no: no,
                    fecha: fecha,
                    motiva: motivo,
                    padecimiento: padecimiento,
                },
                defaults: {
                    consultData
                }
            });
            if (created) {
                return res.json({
                    messsage: "the consult already exist",
                    details: consultData
                });
            }
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.consultaGineco = consultaGineco;
