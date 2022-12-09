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
    timestamps: false,
  });


  BlogPost.associate = (models) => {
    BlogPost.belongsTo(models.User, {
      foreignKey: 'userId', as: 'users'
    });
  }
  return BlogPost;
}

module.exports = BlogPostSchema;