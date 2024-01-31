import consultaObstetro from "../models/consultaObstetro.models";
import consultaGineco from "../models/consultaGineco.model";

export const validarEstadoObstetro = async (patient) => {
  const lastConsult = await consultaObstetro.findByPk(patient.expediente, {
    // se le pasa un id que lo sacas de los params
    include: [
      {
        model: consultaObstetro, //mirar como es
        order: [["fecha", "DESC"]], // Ordenar por fecha en orden descendente
        limit: 1, // esto limita a que agarres la ultima consulta
      },
    ],
  });

  if(lastConsult){
    const fechaActual = new Date();
    const lastFecha = lastConsult.fecha;
    //@ts-ignore
    const diferenciaDias = fechaActual - lastFecha / (1000 * 60 * 60 * 24);
  if (diferenciaDias > 42) {
    const newData = {
      expediente: patient.expediente,
      nombre: patient.nombre,
      apellidoPaterno: patient.apellidoPaterno,
      apellidoMaterno: patient.apellidoMaterno,
      edad: patient.edad,
      fechaIngreso: patient.FechaDeIngreso,
      estadoCivil: patient.estadoCivil,
      calle: patient.calle,
      colonia: patient.colonia,
      municipio: patient.municipio,
      telefono: patient.telefono,
      celular: patient.celular,
      tipo: patient.tipo,
      informacionAdicional: patient.informacionAdicional,
      estadoConsultaObstetro: false,  //actualizo este
      estadoConsultaGineco: patient.estadoConsultaGineco,
    };
    const ConsultUpdate = await consultaObstetro.update(newData, {
      where: {
        expediente_id: patient.expediente,
      },
      returning: true,
    });

    ConsultUpdate
      ? console.log("se actualizo el valor")
      : console.log("no se pudo actualizar el valor");
  } else {
    const newData = {
      expediente: patient.expediente,
      nombre: patient.nombre,
      apellidoPaterno: patient.apellidoPaterno,
      apellidoMaterno: patient.apellidoMaterno,
      edad: patient.edad,
      fechaIngreso: patient.FechaDeIngreso,
      estadoCivil: patient.estadoCivil,
      calle: patient.calle,
      colonia: patient.colonia,
      municipio: patient.municipio,
      telefono: patient.telefono,
      celular: patient.celular,
      tipo: patient.tipo,
      informacionAdicional: patient.informacionAdicional,
      estadoConsultaObstetro: true,  //actualizo este
      estadoConsultaGineco: patient.estadoConsultaGineco,
    };

    const ConsultUpdate = await consultaObstetro.update(newData, {
      where: {
        expediente_id: patient.expediente,
      },
      returning: true,
    });

    ConsultUpdate
      ? console.log("se actualizo el valor")
      : console.log("no se pudo actualizar el valor");
  }
  }else{
    console.log('el paciente no tiene consultas')
  }
};



export const validarEstadoGineco = async (patient) => {
  const lastConsult = await consultaGineco.findByPk(patient.expediente, {
    // se le pasa un id que lo sacas de los params
    include: [
      {
        model: consultaObstetro, //mirar como es
        order: [["fecha", "DESC"]], // Ordenar por fecha en orden descendente
        limit: 1, // esto limita a que agarres la ultima consulta
      },
    ],
  });

  if(lastConsult){
    const fechaActual = new Date();
    const lastFecha = lastConsult.fecha;
    //@ts-ignore
    const diferenciaDias = fechaActual - lastFecha / (1000 * 60 * 60 * 24);
  if (diferenciaDias > 42) {
    const newData = {
      expediente: patient.expediente,
      nombre: patient.nombre,
      apellidoPaterno: patient.apellidoPaterno,
      apellidoMaterno: patient.apellidoMaterno,
      edad: patient.edad,
      fechaIngreso: patient.FechaDeIngreso,
      estadoCivil: patient.estadoCivil,
      calle: patient.calle,
      colonia: patient.colonia,
      municipio: patient.municipio,
      telefono: patient.telefono,
      celular: patient.celular,
      tipo: patient.tipo,
      informacionAdicional: patient.informacionAdicional,
      estadoConsultaObstetro: patient.estadoConsultaObstetro,
      estadoConsultaGineco: false,
    };
    const ConsultUpdate = await consultaObstetro.update(newData, {
      where: {
        expediente_id: patient.expediente,
      },
      returning: true,
    });

    ConsultUpdate
      ? console.log("se actualizo el valor")
      : console.log("no se pudo actualizar el valor");
  } else {
    const newData = {
      expediente: patient.expediente,
      nombre: patient.nombre,
      apellidoPaterno: patient.apellidoPaterno,
      apellidoMaterno: patient.apellidoMaterno,
      edad: patient.edad,
      fechaIngreso: patient.FechaDeIngreso,
      estadoCivil: patient.estadoCivil,
      calle: patient.calle,
      colonia: patient.colonia,
      municipio: patient.municipio,
      telefono: patient.telefono,
      celular: patient.celular,
      tipo: patient.tipo,
      informacionAdicional: patient.informacionAdicional,
      estadoConsultaObstetro: patient.estadoConsultaObstetro,
      estadoConsultaGineco: true,
    };

    const ConsultUpdate = await consultaObstetro.update(newData, {
      where: {
        expediente_id: patient.expediente,
      },
      returning: true,
    });

    ConsultUpdate
      ? console.log("se actualizo el valor")
      : console.log("no se pudo actualizar el valor");
  }
  }else{
    console.log('el paciente no tiene consultas')
  }
};

