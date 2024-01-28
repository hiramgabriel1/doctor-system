import { Sequelize, DataTypes } from 'sequelize';


const sequelize = new Sequelize("sqlite::memory:");

const aFamiliares = sequelize.define("aFamiliares", {
    expediente_id: {
        type: DataTypes.INTEGER,
        references: {
            model: 'fichaIdentificacion',
            key: 'expediente',
        },
        allowNull: false
    },
    hipertension_padre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    hipertension_madre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    hipertension_otros: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    diabetes_padre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    diabetes_madre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    diabetes_otros: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    gemelos_padre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    gemelos_madre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    gemelos_otros: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    cancer_padre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    cancer_madre: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    cancer_otros: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
    },
    otros_enfermedades_padre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otros_enfermedades_madre: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    otros_enfermedades_otros: {
        type: DataTypes.STRING,
        allowNull: false,
    },
})

export default aFamiliares