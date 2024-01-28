import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const consultaObstetro = sequelize.define("consultaObstetro", {
  expediente_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'fichaIdentificacion',
      key: 'expediente',       
    },
    allowNull: false,
  },
  no: { //creo que se
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mareos: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  nauseas: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vomito: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  flujo: {
    type: DataTypes.STRING,
    allowNull: false, 
  },
  xdUrin: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  mFetale: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  otros: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export default consultaObstetro;