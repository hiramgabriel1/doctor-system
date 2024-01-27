import { Request, Response } from "express";
import consultginecoModels  from "../models/consultaGineco.model";

export class consultaGineco {
    async updateConsult(req: Request, res: Response) {
        try {
            const { no, fecha, motivo, padecimiento } = req.body;

            const consultData = {
                no,
                fecha,
                motivo,
                padecimiento,

            };

            const createConsult = await consultginecoModels.create({consultData})

            createConsult 
            ? res.status(200).json({ messsage: `consult created ${consultData}`})
            : res.status(400).json({ message: "consult could not be created" })

        } catch (error) {
            console.log(error);
        }
    }
}

