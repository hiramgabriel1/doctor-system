import { Sequelize, DataTypes } from 'sequelize';

const sequelize = new Sequelize("sqlite:memory:")

const aPersonales = sequelize.define("aPersonales", {
    expediente_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'fichaIdentificacion',
          key: 'expediente',       
        },
        allowNull: false,
    },
    hipertension: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tx_hipertension: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    endocrinos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tx_endocrinos: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    alergias: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tx_alergias: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    transfuciones: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tx_tranfuciones: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otros: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    tx_otros:{
        type: DataTypes.STRING,
        allowNull: false,
    },
    otros_padecimientos:{
        type: DataTypes.STRING,
        allowNull: false,
    }

})

export default aPersonales;