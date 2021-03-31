'use strict';

const express=require('express');
const validator = require('../middleware/validator');
const Data=require('../models/data-collection-class');
const clothesModle=require('../models/clothes')
const clothes=new Data(clothesModle);
const router=express.Router();



async  function getClothes(req,res,next){
    try {
        const resObj = await clothes.read();
        res.json(resObj);
      } catch (error) {
        next(error);
      }
}

async  function createClothes(req, res,next){
    const clothesObject = req.body;
    console.log(clothesObject);
    try {
      const resObj = await clothes.create(clothesObject);
      res.status(200).json(resObj);
    } catch (error) {
      next(error);
    }
}

async  function getClothesById(req,res,next){
  try {
    const resObj = await clothes.read(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async  function updateClothes(req, res,next){
  console.log("*************************", req.body);
    const clothesObject = req.body;
    try {
      const resObj = await clothes.update(req.params.id, clothesObject);
      res.json(resObj);
    } catch (error) {
      next(error);
    }
}

async  function deleteClothes(req, res,next){
    try {
        const resObj = await clothes.delete(req.params.id);
        res.json(resObj);
      } catch (error) {
        next(error);
      }
}

router.get('/', getClothes);
router.post('/', createClothes);
router.get('/:id',validator ,getClothesById);
router.put('/:id', validator ,updateClothes);
router.delete('/:id', validator ,deleteClothes);

module.exports=router;