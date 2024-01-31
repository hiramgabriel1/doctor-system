import { Request, Response } from "express";
import aGineObstModel from "../models/aGineObst.model";

export class aGineObstController {
  async getAGineObstByExpediente(req: Request, res: Response) {
    try {
      const { expedienteId } = req.params;

      const resultAGineObst = await aGineObstModel.findAll({
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
              "el paciente no posee antecedentes ginecologicos obstetros", details: false
          });
    } catch (error) {
      res.status(500).json({ errorResponse: error })
    }
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

      const created = await aGineObstModel.create({ data });

      created
        ? res.status(200).json({ message: ` created ${data}`, details: true })
        : res.status(400).json({ messga: ` error al crear`, details: false });
    } catch (error) {
      res.status(500).json({ errorResponse: error })
    }
  }

  async modifyAGineObst(req: Request, res: Response) {
    try {
      const { expedienteId } = req.params
      const updateData = req.body

      const aGineObst = await aGineObstModel.update(updateData, {
        where: {
          expediente_id: expedienteId
        },
        returning: true,
      })

      aGineObst
        ? res.status(200).json({ message: updateData, details: true })
        : res.status(404).json({ message: 'error internal', details: false })

    } catch (error) {
      res.status(500).json({ errorResponse: error })
    }
  }
}
