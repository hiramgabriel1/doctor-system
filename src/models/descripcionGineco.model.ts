import {Sequelize, DataTypes} from 'sequelize'
const sequelize = new Sequelize("sqlite::memory:")

const descripcionGineco= sequelize.define("descripcionGineco",{
    expediente_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'fichaIdentificacion',
          key: 'expediente',       
        },
        allowNull: false,
      },
      us:{
        type:DataTypes.STRING,
        allowNull:false
      },
      motivo:{ 
        type:DataTypes.STRING,
        allowNull:false
      },
      padecimientos:{
        type:DataTypes.STRING,
        allowNull:false
      }
})

export default descripcionGineco;