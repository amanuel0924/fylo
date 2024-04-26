import express from 'express';

import { createFile,getFilesById,getAllFile,updateFile,deleteFile } from '../controllers/fileController';
import uploader from './../controllers/uploadController'
import { ValidateSchema,Schema } from '../middleware/vallidator';

const router = express.Router();

router.route('/').post( uploader,ValidateSchema(Schema.create),createFile).get( getAllFile);
router.route('/:id').get( getFilesById).put( uploader,updateFile).delete( deleteFile);


export default router;