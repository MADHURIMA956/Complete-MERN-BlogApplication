const express = require('express');
const router = express();

const Post = require('../models/post.model');

router.post('/', async(req,res) => {

       try{
        const post = await Post(req.body);
        post.save();
        res.status(200).json(post)
       }catch(e){
              res.status(500).json(`message : ${e}`)
       }
})

