//Modelo da tabela veiculos
module.exports = (sequelize, DataTypes) => {
    const Veiculo = sequelize.define(
        'Veiculo', {
        veiculo:DataTypes.STRING,
        marca_id: DataTypes.INTEGER,
        ano:DataTypes.INTEGER,
        descricao:DataTypes.STRING,
        vendido:DataTypes.STRING,
        createAt:DataTypes.DATE,
        updateAt:DataTypes.DATE
        
    },
        {
            tableName: 'veiculos',
            timestamps: false
        }
    )

    // To create a One - To - One relationship, the hasOne and belongsTo associations are used together;
    // To create a One - To - Many relationship, the hasMany and belongsTo associations are used together;
    // To create a Many - To - Many relationship, two belongsToMany calls are used together

    Veiculo.associate = (models) => {
        // relação N:1
        Veiculo.belongsTo(models.Marca, { as: "marca", foreignKey: "marca_id" })
    }
    return Veiculo;
}