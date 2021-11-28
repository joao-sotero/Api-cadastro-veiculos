//Modelo da tabela Marca
module.exports = (sequelize, DataTypes) => {
    const Marca = sequelize.define(
        'Marca', {
        nome:DataTypes.STRING
    }, {
        tableName: "marca",
        timestamps: false
    }
    )
    // To create a One - To - One relationship, the hasOne and belongsTo associations are used together;
    // To create a One - To - Many relationship, the hasMany and belongsTo associations are used together;
    // To create a Many - To - Many relationship, two belongsToMany calls are used together

    Marca.associate = (models) => {
        Marca.hasMany(models.Veiculo, { as: "marca", foreignKey: "marca_id" })
    }
    return Marca;
}