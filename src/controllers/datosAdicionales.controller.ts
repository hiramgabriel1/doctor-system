import { Response, Request } from "express";
import datosAdicionalesModel from "../models/datosAdicionales.model";

export class datosAdicionales {
    async getDatosAdicionales(req: Request, res: Response) {
        try {
            const { expedienteId } = req.params

            const datosAdicionales = await datosAdicionalesModel.findOne({
                where: {
                    expediente_id: expedienteId,
                }
            });

            datosAdicionales
            ? res.status(200).json({ message: datosAdicionales, details: true })
            : res.status(400).json({ message: "no posee datos adicionales", details: false });

        } catch(error) {
            console.log(error)
        }
    }

    async createDatosAdicionales(req: Request, res: Response) {
        try {

            const {
                expediente_id,
                religion,
                escolaridad,
                trabaja,
                trabajo,
                adicciones,
                info_adicional,
            } = req.body;

            const dataDatosAdicionales = {
                expediente_id,
                religion,
                escolaridad,
                trabaja,
                trabajo,
                adicciones,
                info_adicional,
            }

            const created = await datosAdicionalesModel.create({ dataDatosAdicionales })

            created
            ? res.status(200).json({ message: 'datos adicionales del paciente creados', details: true })
            : res.status(400).json({ message: 'error al crear', detalis: false })

        } catch(error) {
            console.log(error)
        }
    }
}