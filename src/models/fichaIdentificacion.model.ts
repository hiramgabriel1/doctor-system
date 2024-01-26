import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const patientsModels = sequelize.define("User", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tipoConsulta: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ApellidoPaterno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  ApellidoMaterno: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Edad: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  FechaDeIngreso: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  EstadoCivil: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  Dirección: {
    type: DataTypes.STRING,
    allowNull: false, // Puedes ajustar esto según tus necesidades
  },
  TelefonoPersonales: {
    type: DataTypes.STRING,
    allowNull: false, // Puedes ajustar esto según tus necesidades
  },
});

export default patientsModels;
