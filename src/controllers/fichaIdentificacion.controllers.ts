import { Request, Response } from "express";
import patientsModels from "../models/fichaIdentificacion.model";

export class fichaIdentificacion {
  async getPatients(req: Request, res: Response) {
    try {
      const patients = await patientsModels.findAll();

      return patients.length > 0
        ? res.status(200).json({ messaje: patients, details: true })
        : res
            .status(400)
            .json({ messaje: "No existen pacientes", details: false });
    } catch (error) {
      console.log(error);
    }
  }

  async getPatientsByName(req: Request, res: Response) {
    try {
      const { name } = req.body;
      const patients = await patientsModels.findOne({
        where: { nombre: name },
      });

      return patients === null
        ? res.status(404).json("usuario no encontrado")
        : res.status(200).json({ response: "encontrado", details: patients });

      // const patientsFiltered = patients.filter(patients.name.toLowerCase().includes(name.toLowerCase()));

      // patientsFiltered
      //   ? res.status(200).json({ messaje: patientsFiltered, details: true })
      //   : res.status(400).json({
      //       messaje: "No existen pacientes con ese nombre o apellido",
      //       details: false,
      //     });
    } catch (error) {
      console.log(error);
    }
  }

  async getPatientsFiltred(req: Request, res: Response) {
    try {
      const { filter } = req.params;
      const patients = await patientsModels.findOne({
        where: { filter: filter },
      });

      patients
        ? res.status(200).json({ messaje: patients, details: true })
        : res.status(400).json({
            messaje: "No existen pacientes para este tipo de consilta",
            details: false,
          });
    } catch (error) {
      console.log(error);
    }
  }

  async createFichaIdentificacion(req: Request, res: Response) {
    try {
      const {
        expediente,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        edad,
        fechaIngreso,
        estadoCivil,
        calle,
        colonia,
        municipio,
        telefono,
        celular,
        tipo,
        informacionAdicional,
      } = req.body;

      const dataUser = {
        expediente,
        nombre,
        apellidoPaterno,
        apellidoMaterno,
        edad,
        fechaIngreso,
        estadoCivil,
        calle,
        colonia,
        municipio,
        telefono,
        celular,
        tipo,
        informacionAdicional,
      };

      const createFicha = await patientsModels.create({ dataUser });

      return createFicha
        ? res
            .send(200)
            .json({ messaje: "user created" + dataUser, details: true })
        : res.status(400).json({ message: "Error al crear el user" });
    } catch (error) {
      console.log(error);
    }
  }
}