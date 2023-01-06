const express = require('express');
const { getPost, CreatePost, UpdatePost  } = require('../Controllers/posts');

const postRoutes= express.Router();

// inheriting the /posts routes 
postRoutes.get('/', getPost)
postRoutes.post('/', CreatePost)
postRoutes.patch('/:id', UpdatePost )



module.exports = postRoutes;