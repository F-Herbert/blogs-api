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

module.exports = {
  blogPost,
};