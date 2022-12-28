const express = require('express');
const { getPost, CreatePost  } = require('../Controllers/posts');

const postRoutes= express.Router();

// inheriting the /posts routes 
postRoutes.get('/', getPost)
postRoutes.post('/', CreatePost)



module.exports = postRoutes;