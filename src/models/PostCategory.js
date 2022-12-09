const PostCategoriesSchema = (sequelize,DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {
    categoryId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
    postId: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
    },
  },
  {
    timestamps: false,
    underscored: true, 
    tableName: 'post_categories'
  });

  PostCategory.associate = (models) => {
    models.BlogPost.belongsToMany(models.Category, {
      as: 'blogPosts',
      through: PostCategory,
      foreignKey: 'postId',
      otherKey: 'categoryId', 
    });
    models.Category.belongsToMany(models.BlogPost, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'categoryId', 
      otherKey: 'postId',
    })
  };

  return PostCategory;
}

module.exports = PostCategoriesSchema;