import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const fichaIdentificacion = sequelize.define("fichaIdentificacion", {
  expediente:{
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull: false,
    primaryKey:true,
  },
  nombre: {
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
    allowNull: false, 
  },
  TelefonoPersonales: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default fichaIdentificacion;