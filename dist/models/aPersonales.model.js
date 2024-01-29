"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite:memory:");
const aPersonales = sequelize.define("aPersonales", {
    expediente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'fichaIdentificacion',
            key: 'expediente',
        },
        allowNull: false,
    },
    hipertension: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tx_hipertension: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    endocrinos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tx_endocrinos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    alergias: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tx_alergias: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    transfuciones: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tx_tranfuciones: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otros: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tx_otros: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otros_padecimientos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
exports.default = aPersonales;
