'use strict';

const express=require('express');
const Data=require('../models/data-collection-class');
console.log(Data);
const validator = require('../middleware/validator');
console.log(validator);
const foodModle=require('../models/food')
console.log(foodModle);
const food=new Data(foodModle);
console.log(food);
const router=express.Router();



async function getfood(req,res,next){
    try {
        const resObj = await food.read();
        res.json(resObj);
      } catch (error) {
        next(error);
      }
}

async  function createfood(req, res,next){
    const foodObject = req.body;
  try {
    const resObj = await food.create(foodObject);
    res.status(200).json(resObj);
  } catch (error) {
    next(error)
  }
}

async  function getfoodById(req,res,next){
  try {
    const resObj = await food.read(req.params.id);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async  function updatefood(req, res,next){
    const foodObject = req.body;
  try {
    const resObj = await food.update(req.params.id, foodObject);
    res.json(resObj);
  } catch (error) {
    next(error);
  }
}

async  function deletefood(req, res,next){
    try {
        const resObj = await food.delete(req.params.id);
        res.json(resObj);
      } catch (error) {
        next(error);
      }
}

router.get('/', getfood);
router.post('/', createfood);
router.get('/:id',validator ,getfoodById);
router.put('/:id', validator ,updatefood);
router.delete('/:id', validator ,deletefood);

module.exports=router;