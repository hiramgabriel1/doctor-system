import fisicaGineco from "../models/fisicaGineco.model";
import { Request, Response } from "express";

export class fisicaGinecoController {
  async getFisicaGienoByExpedient(req: Request, res: Response) {
    try {
      const { expedienteId } = req.params;
      const response = await fisicaGineco.findAll({
        where: {
          expedienteId: expedienteId,
        },
      });

      response
        ? res.status(200).json({ message: response, details: true })
        : res
            .status(400)
            .json({
              message:
                "el paciente no tiene descipciones fisicas ginecologicas",
              details: false,
            });
    } catch (error) {
      res.status(500).json({ errorResponse: error });
    }
  }

  async createFisicaGineco(req: Request, res: Response) {
    try {
      const {
        expediente_id,
        tensionArterial,
        p,
        temp,
        peso,
        talla,
        pesoIdeal,
        indiceMasaCorporal,
        torax,
        mamas,
        abdomen,
        gentiles,
        vulva,
        vagina,
        cervix,
        flujo,
        tacto,
        dolor,
        tamano,
        anexos,
        citologia,
        acetico,
        lugol,
        varises,
      } = req.body;


      const data = {
        expediente_id,
        tensionArterial,
        p,
        temp,
        peso,
        talla,
        pesoIdeal,
        indiceMasaCorporal,
        torax,
        mamas,
        abdomen,
        gentiles,
        vulva,
        vagina,
        cervix,
        flujo,
        tacto,
        dolor,
        tamano,
        anexos,
        citologia,
        acetico,
        lugol,
        varises,
      };

      const created= await fisicaGineco.create({data})

      created
      ? res.status(200).json({message: `created ${data}`, details:true})
      : res.status(400).json({message: 'error al crear'})
    } catch (error) {
      res.status(500).json({ errorResponse: error });
    }
  }
}
