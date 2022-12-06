const CategorySchema = (sequelize,DataTypes) => {
  const Category = sequelize.define('Category', {
    name: {
      type:DataTypes.STRING,
      allowNull: false,
    }
  })

  return Category;
}

module.exports = CategorySchema;