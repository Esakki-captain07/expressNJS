import express from 'express';
import userService from '../service/userService.js';

const userController = express.Router();

const createFileHandler = (req, res) => {
    try {
        const fileName = userService.createFile();
        res.status(200).send({
            message: 'File created successfully.',
            fileName: fileName
        });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Internal server error.'
        });
    }
};

const getFilesHandler = (req, res) => {
    try {
        const files = userService.getFiles();
        res.status(200).json({ files });
    } catch (error) {
        console.error(error);
        res.status(500).send({
            message: 'Internal server error.'
        });
    }
};

userController.post('/file', createFileHandler);
userController.get('/file', getFilesHandler);

export default userController;
