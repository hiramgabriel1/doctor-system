import { Request, Response } from "express";
import aGineObst from "../models/aGineObst.model";

export class aGineObstController {
  async getAGineObstByExpediente(req: Request, res: Response) {
    try {
      const { expedienteId } = req.params;

      const resultAGineObst = await aGineObst.findAll({
        where: {
          expediente_id: expedienteId,
        },
      });

      resultAGineObst
        ? res.status(200).json({ message: resultAGineObst, details: true })
        : res
            .status(400)
            .json({
              message:
                "el paciente no posee antecedentes ginecologicos obstetros", details: false});
    } catch (error) {
res.status(500).json({ errorResponse: error })    }
  }

  async createAGineObst(req: Request, res: Response) {
    try {
      const {
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
      } = req.body;

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

      const created = await aGineObst.create({ data });

      created
        ? res.status(200).json({ message: ` created ${data}`, details: true })
        : res.status(400).json({ messga: ` error al crear`, details: false });
    } catch (error) {
res.status(500).json({ errorResponse: error })    }
  }
}
