"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite::memory:");
const consultaObstetro = sequelize.define("consultaObstetro", {
    expediente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'fichaIdentificacion',
            key: 'expediente',
        },
        allowNull: false,
    },
    no: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    mareos: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    nauseas: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    vomito: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    flujo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    xdUrin: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    mFetale: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otros: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = consultaObstetro;
