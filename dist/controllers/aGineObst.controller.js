"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.aGineObstController = void 0;
const aGineObst_model_1 = __importDefault(require("../models/aGineObst.model"));
class aGineObstController {
    async getAGineObstByExpediente(req, res) {
        try {
            const { expedienteId } = req.params;
            const resultAGineObst = await aGineObst_model_1.default.findAll({
                where: {
                    expediente_id: expedienteId,
                },
            });
            resultAGineObst
                ? res.status(200).json({ message: resultAGineObst, details: true })
                : res
                    .status(400)
                    .json({
                    message: "el paciente no posee antecedentes ginecologicos obstetros",
                });
        }
        catch (error) {
            console.log(error);
        }
    }
    async createAGineObst(req, res) {
        try {
            const { expediente_id, memarca, ivsa, parejas, gesta, para, aborto, cesarea, peso, pap, resul, tx, anticonsep, fur, dismenorrea, } = req.body;
            const data = {
                expediente_id,
                memarca,
                ivsa,
                parejas,
                gesta,
                para,
                aborto,
                cesarea,
                peso,
                pap,
                resul,
                tx,
                anticonsep,
                fur,
                dismenorrea,
            };
            const created = await aGineObst_model_1.default.create({ data });
            created
                ? res.status(200).json({ message: ` created ${data}`, details: true })
                : res.status(400).json({ messga: ` error al crear`, details: false });
        }
        catch (error) {
            console.log(error);
        }
    }
}
exports.aGineObstController = aGineObstController;
