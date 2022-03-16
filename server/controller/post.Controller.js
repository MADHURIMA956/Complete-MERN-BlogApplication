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

router.get('/', async(req,res) => {
      try{
       const post = await Post.find({});
       res.status(200).json(post)
      }catch(e){
             res.status(500).json(`message : ${e}`)
      }
})

router.get('/:id', async(req,res) => {
        try{
         const post = await Post.findById(req.params.id);
         res.status(200).json(post)
        }catch(e){
               res.status(500).json(`message : ${e}`)
        }
  })


router.post('/:id', async(req,res) => {
       try{
              const post = await Post.findByIdAndUpdate(req.params.id, {$set:req.body}); //$set-whole replace, $push-push new obj , $addToSet-push new obj without modify old one 
              res.status(200).json(post)
       }catch(e){
              res.status(500).json(`message : ${e}`)
       }
})


router.delete('/:id', async(req,res) => {
       try{
              const post = await Post.findByIdAndDelete(req.params.id); 
              res.status(200).json(post)
       }catch(e){
              res.status(500).json(`message : ${e}`)
       }
})

module.exports = router;