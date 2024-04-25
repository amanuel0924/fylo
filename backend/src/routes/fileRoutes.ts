import express from 'express';

import { createFile } from '../controllers/fileController';

const router = express.Router();

router.route('/').post( createFile);

export default router;