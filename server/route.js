const express = require('express');
const router =  express();

const createPost = require('./controller/post.Controller')
const getAllposts = require('./controller/post.Controller')
const getposts = require('./controller/post.Controller')
const updatepost = require('./controller/post.Controller')
const deletepost = require('./controller/post.Controller')


router.use('/create', createPost);
router.use('/posts',getAllposts);
router.use('/post',getposts);
router.use('/update',updatepost);
router.use('/delete',deletepost);


module.exports = router;