import express from 'express';

import { createFile,getFilesById,getAllFile } from '../controllers/fileController';

const router = express.Router();

router.route('/').post( createFile).get( getAllFile);
router.route('/:id').get( getFilesById);


export default router;