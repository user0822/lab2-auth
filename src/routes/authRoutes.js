import express from 'express';
import { register, login } from '../controllers/authController.js';
const router = express.Router();

/**
 * @swagger
 * /api/auth/register:
 * post:
 * summary: Register new user
 * tags: [Auth]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required:
 * - email
 * - password
 * - name
 * properties:
 * email:
 * type: string
 * password:
 * type: string
 * name:
 * type: string
 * responses:
 * 201:
 * description: Created
 */
router.post('/register', register);

/**
 * @swagger
 * /api/auth/login:
 * post:
 * summary: Login user
 * tags: [Auth]
 * requestBody:
 * required: true
 * content:
 * application/json:
 * schema:
 * type: object
 * required:
 * - email
 * - password
 * properties:
 * email:
 * type: string
 * password:
 * type: string
 * responses:
 * 200:
 * description: Success
 */
router.post('/login', login);

export default router;