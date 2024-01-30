import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize("sqlite:memory:")

const consultginecoModels = sequelize.define("consultGineco", {
    expediente_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'fichaIdentificacion',
          key: 'expediente',       
        },
        allowNull: false,
      },
    no: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    motivo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    padecimiento: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    estado: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
})

export default consultginecoModels;