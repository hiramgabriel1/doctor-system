"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize("sqlite:memory:");
const aGineObst = sequelize.define("aGineObst", {
    expediente_id: {
        type: sequelize_1.DataTypes.INTEGER,
        references: {
            model: 'fichaIdentificacion',
            key: 'expediente',
        },
        allowNull: false,
    },
    memarca: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    ivsa: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    parejas: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    gesta: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    para: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    aborto: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    cesarea: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    peso: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    pap: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    resul: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    tx: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    anticonsep: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    fur: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    dismenorrea: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
});
exports.default = aGineObst;
