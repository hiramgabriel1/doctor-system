import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize("sqlite:memory:")

const consultginecoModels = sequelize.define("User", {
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
})

export default consultginecoModels;