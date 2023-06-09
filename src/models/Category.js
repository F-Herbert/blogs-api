const CategorySchema = (sequelize,DataTypes) => {
  const Category = sequelize.define('Category', {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type:DataTypes.STRING,
      allowNull: false,
    }},
    {
      timestamps: false,
      tableName: "categories",
    });

  return Category;
}

module.exports = CategorySchema;