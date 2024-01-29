"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite::memory:");
const aFamiliares = sequelize.define("aFamiliares", {
    expediente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'fichaIdentificacion',
            key: 'expediente',
        },
        allowNull: false
    },
    hipertension_padre: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    hipertension_madre: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    hipertension_otros: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    diabetes_padre: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    diabetes_madre: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    diabetes_otros: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    gemelos_padre: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    gemelos_madre: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    gemelos_otros: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    cancer_padre: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    cancer_madre: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    cancer_otros: {
        type: sequelize_1.DataTypes.BOOLEAN,
        allowNull: false,
    },
    otros_enfermedades_padre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otros_enfermedades_madre: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    otros_enfermedades_otros: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = aFamiliares;
