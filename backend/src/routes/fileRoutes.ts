import express from 'express';

import { createFile,getFilesById } from '../controllers/fileController';

const router = express.Router();

router.route('/').post( createFile);
router.route('/:id').get( getFilesById);

export default router;