const { BlogPost, Category, PostCategory } = require('../models');
const token = require('../auth/jwtFunctions');

const blogPost = async ({ title, content, categoryIds }, authorization) => {
  const categories = await Category.findAll({ where: { id: [...categoryIds] } });
  if (categories.length < 2) return { status: 400, error: 'one or more "categoryIds" not found' };
  const { data } = token.verifyToken(authorization);
  if (categories.length === 2) {
    const newPost = await BlogPost.create({ title, content, userId: data.id });
    await Promise.all(categoryIds
      .map(async (categoryId) => PostCategory
        .create({ postId: newPost.id, categoryId })));
    return { status: 201, message: newPost };
  }
};

module.exports = {
  blogPost,
};