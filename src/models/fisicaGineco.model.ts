import {Sequelize, DataTypes} from 'sequelize'
const sequelize = new Sequelize("sqlite::memory:")

const fisicaGineco= sequelize.define("fisicaGineco",{
    expediente_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'fichaIdentificacion',
          key: 'expediente',       
        },
        allowNull: false,
      },
      tensionArterial:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      p:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      
      temp:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      
      peso:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      
      talla:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },


      pesoIdeal:{
        type: DataTypes.INTEGER,
        allowNull:false
      },
      
      indiceMasaCorporal:{
        type: DataTypes.STRING,
        allowNull:false
      },
      
      torax:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      mamas:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      
      abdomen:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      gentiles:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      vulva:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      vagina:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      cervix:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      flujo:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      tacto:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      dolor:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      tamano:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      anexos:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      citologia:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      acetico:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      lugol:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
      varises:{
        type: DataTypes.BOOLEAN,
        allowNull:false
      },
})

export default fisicaGineco;