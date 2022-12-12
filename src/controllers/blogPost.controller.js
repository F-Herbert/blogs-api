const blogPostService = require('../services/blogPost.service');

const blogPost = async (req, res) => {
  try {
    const infoBody = req.body;
    const { authorization } = req.headers;
    const { status, error, message } = await blogPostService.blogPost(infoBody, authorization);
    if (error) return res.status(status).json({ message: error });
    return res.status(status).json(message);
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};

const getAllPost = async (req, res) => {
  try {
    const { status, message } = await blogPostService.getAllPost();
    return res.status(status).json(message);
  } catch (error) {
    return res.status(500).json(error);
  }
};

const getPostById = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, message, error } = await blogPostService.getPostById(Number(id));
    if (error) return res.status(status).json({ message: error });
    return res.status(status).json(message);
  } catch (error) {
    return res.status(500).json(error);
  }
};

module.exports = {
  blogPost,
  getAllPost,
  getPostById,
};