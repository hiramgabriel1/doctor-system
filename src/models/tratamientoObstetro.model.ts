import { Sequelize, DataTypes } from "sequelize";
const sequelize = new Sequelize("sqlite::memory:");


const tratamientoObstetro = sequelize.define("tratamientoObstetro", {
  expediente_id: {
    type: DataTypes.INTEGER,
    references: {
      model: 'fichaIdentificacion',
      key: 'expediente',       
    },
    allowNull: false,
  },
  fecha: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  medicamentos: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.STRING,
    allowNull: false,
  }
});

export default tratamientoObstetro;


