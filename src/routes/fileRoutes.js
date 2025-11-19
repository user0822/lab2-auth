import express from 'express';
import { uploadFile } from '../controllers/fileController.js';
import { authenticate } from '../middleware/auth.js';
import { upload } from '../middleware/upload.js';

const router = express.Router();

/**
 * @swagger
 * /api/files/upload:
 * post:
 * summary: Upload a file
 * tags: [Files]
 * security:
 * - bearerAuth: []
 * requestBody:
 * content:
 * multipart/form-data:
 * schema:
 * type: object
 * properties:
 * file:
 * type: string
 * format: binary
 * responses:
 * 201:
 * description: File uploaded
 */
router.post('/upload', authenticate, upload.single('file'), uploadFile);

export default router;