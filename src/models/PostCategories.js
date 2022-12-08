const PostCategoriesSchema = (sequelize,DataTypes) => {
  const PostCategory = sequelize.define('PostCategory', 
  {},
  {
    timestamps: false,
    underscored: true, 
    tableName: 'post_categories'
  });

  PostCategory.associate = ({BlogPost,Category}) => {
    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategory,
      foreignKey: 'post_id',
      otherKey: 'category_id', 
    });
    Category.belongsToMany(BlogPost, {
      as: 'blogs_posts',
      through: PostCategory,
      foreignKey: 'category_id', 
      otherKey: 'post_id',
    })
  };

  return PostCategory;
}

module.exports = PostCategoriesSchema;