const BlogPostSchema = (sequelize,DataTypes) => {
  const BlogPost = sequelize.define('BlogPost',{
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    published: DataTypes.DATE,
    updated: DataTypes.DATE,
  }, 
  {
    sequelize,
    tableName: 'blog_posts',
    underscored: true,
    timestamps: false,
  });


  BlogPost.associete = ({ Users }) => {
    BlogPost.belongsTo(Users, {
      as: 'users',
      foreignKey: 'user_id',
    })
  }
  return BlogPost;
}

module.exports = BlogPostSchema;