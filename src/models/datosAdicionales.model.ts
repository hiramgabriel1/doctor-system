import { Sequelize, DataTypes } from "sequelize";

const sequelize = new Sequelize("sqlite::memory:");

const datosAdicionalesModel = sequelize.define("datosAdicionales", {
    expediente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'fichaIdentificacion',
          key: 'expediente',
        },
        allowNull: false
    },
    religion: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    escolaridad: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    trabaja: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    trabajo: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    adicciones: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    info_adicional: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default datosAdicionalesModel    