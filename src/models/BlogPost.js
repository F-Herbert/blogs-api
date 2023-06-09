const BlogPostSchema = (sequelize,DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',{
    id:{
      type:DataTypes.INTEGER,
      autoIncrement: true,
      allowNull:false,
      primaryKey: true,
    },
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
    userId: DataTypes.INTEGER,
  },
  {
    tableName: 'blog_posts',
    underscored: true,
    timestamps: true,
    createdAt: 'published',
    updatedAt: 'updated'
  });


  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'user'
    });
  }

  return BlogPost;
}

module.exports = BlogPostSchema;