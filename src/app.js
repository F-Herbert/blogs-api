const express = require('express');
const userController = require('./controllers/user.controller');
const categoriesController = require('./controllers/category.controller');
const blogPostController = require('./controllers/blogPost.controller');
const valid = require('./middlewares/userValidations');
const { tokenValidation } = require('./middlewares/tokenValidation');
const { validationFields } = require('./middlewares/blogPostValidation');

// ...

const app = express();

app.use(express.json());

app.post('/login', valid.validFields, userController.login);
app.post('/user', valid.validateNewUserFields, userController.createNewUser);
app.post('/categories', tokenValidation, categoriesController.addNewCategory);
app.post('/post', tokenValidation, validationFields, blogPostController.blogPost);

app.get('/user', tokenValidation, userController.getAllUsers);
app.get('/user/:id', tokenValidation, userController.getUserById);
app.get('/categories', tokenValidation, categoriesController.getAllCategories);

// "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJkYXRhIjp7ImlkIjoxLCJkaXNwbGF5TmFtZSI6Ikxld2lzIEhhbWlsdG9uIiwiZW1haWwiOiJsZXdpc2hhbWlsdG9uQGdtYWlsLmNvbSIsImltYWdlIjoiaHR0cHM6Ly91cGxvYWQud2lraW1lZGlhLm9yZy93aWtpcGVkaWEvY29tbW9ucy8xLzE4L0xld2lzX0hhbWlsdG9uXzIwMTZfTWFsYXlzaWFfMi5qcGcifSwiaWF0IjoxNjcwNTA4OTQ0LCJleHAiOjE2NzEzNzI5NDR9.O69Se7soIjYK2htKBjQSukP-h4xTjKgcBPa-Xny4N4o"

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
