import express from 'express';
import userController from './userControler.js';
const controller = express.Router();

controller.use('/', userController); 

export default controller;
