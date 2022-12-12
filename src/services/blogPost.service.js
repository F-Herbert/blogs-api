const { BlogPost, Category, PostCategory, User } = require('../models');
const token = require('../auth/jwtFunctions');

const blogPost = async ({ title, content, categoryIds }, authorization) => {
  const categories = await Category.findAll({ where: { id: [...categoryIds] } });
  const { data } = token.verifyToken(authorization);

  if (categories.length < 2) return { status: 400, error: 'one or more "categoryIds" not found' };
  if (categories.length === 2) {
    const newPost = await BlogPost.create({ title, content, userId: data.id });
    await Promise.all(categoryIds
      .map(async (categoryId) => PostCategory
        .create({ postId: newPost.id, categoryId })));
    return { status: 201, message: newPost };
  }
};

const getAllPost = async () => {
  const allPost = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
      { model: Category, as: 'categories', through: { attributes: [] } },
    ] });
  
  return { status: 200, message: allPost };
};

module.exports = {
  blogPost,
  getAllPost,
};