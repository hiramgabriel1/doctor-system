"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite::memory:");
const fichaIdentificacion = sequelize.define("fichaIdentificacion", {
    expediente: {
        type: sequelize_1.DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
    },
    nombre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ApellidoPaterno: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ApellidoMaterno: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Edad: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    FechaDeIngreso: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    EstadoCivil: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    Dirección: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    TelefonoPersonales: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = fichaIdentificacion;
