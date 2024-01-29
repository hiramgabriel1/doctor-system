import { Sequelize,DataTypes} from "sequelize";
const sequelize = new Sequelize("sqlite:memory:")


const aGineObst= sequelize.define("aGineObst",{
    expediente_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'fichaIdentificacion',
          key: 'expediente',       
        },
        allowNull: false,
    },
    memarca:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    ivsa:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    parejas:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    gesta:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    para:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    aborto:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    cesarea:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    peso:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    pap:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    resul:{
        type:DataTypes.STRING,
        allowNull: false,
    },

    tx:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    anticonsep:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    fur:{
        type:DataTypes.STRING,
        allowNull: false,
    },
    dismenorrea:{
        type:DataTypes.STRING,
        allowNull: false,
    },

})

export default aGineObst
