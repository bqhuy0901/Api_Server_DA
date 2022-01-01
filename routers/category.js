
const express = require('express');
const Category = require('../models/Category.js');
const route = express.Router();


//lay ve sach
route.get('/', async (req, res) => {
    try {
        const categories = await Category.find();
        res.json(categories)
    } catch (err) {
        res.json({message: err});
    }
  });

  //tao ra sach 
  route.post('/', async (req, res) => {
    const categories = new Category({
        title: req.body.title,
        description: req.body.description,
    }) 
    try {
        const saveCategory = await categories.save()
        res.json(saveCategory);
    } catch (err) {
        res.json({message: err});
    }
  });

  route.get("/:categoryId", async (req,res) => {
      try {
          const category  = await Category.findById(req.params.categoryId)
          res.json(category);
      } catch (err) {
        res.json({message: err});
      }
  })

  ///Xoa 
  route.delete("/:categoryId", async (req,res) => {
    try {
        const removeCategory  = await Category.remove( {_id: req.params.categoryId})
        res.json(removeCategory);
    } catch (err) {
      res.json({message: err});
    }
})

route.patch("/:categoryId", async (req,res) =>{
    try {
       const updateCategory = await  Category.updateOne( {_id: req.params.categoryId},
        {$set: {title: req.body.title}})
        res.json(updateCategory)
    } catch (error) {
        res.json({message: err});
    }
 
})



  module.exports = route;
  