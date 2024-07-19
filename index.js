import express from 'express';
import userController from './src/controler/userControler.js';
const port = 8000;
const app = express();

app.use(express.json());
app.use('/',userController); 

app.listen(port, () => console.log(`App is listening on port ${port}`));
