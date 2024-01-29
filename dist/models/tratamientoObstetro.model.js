"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite::memory:");
const tratamientoObstetro = sequelize.define("tratamientoObstetro", {
    expediente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'fichaIdentificacion',
            key: 'expediente',
        },
        allowNull: false,
    },
    fecha: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    medicamentos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    descripcion: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    }
});
exports.default = tratamientoObstetro;
