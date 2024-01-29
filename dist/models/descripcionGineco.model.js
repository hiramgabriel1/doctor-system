"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite::memory:");
const descripcionGineco = sequelize.define("descripcionGineco", {
    expediente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'fichaIdentificacion',
            key: 'expediente',
        },
        allowNull: false,
    },
    us: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    motivo: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    },
    padecimientos: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false
    }
});
exports.default = descripcionGineco;
