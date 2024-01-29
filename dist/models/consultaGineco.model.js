"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite:memory:");
const consultginecoModels = sequelize.define("consultGineco", {
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
    motivo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    padecimiento: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = consultginecoModels;
