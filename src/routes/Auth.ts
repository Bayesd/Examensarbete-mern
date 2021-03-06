import express from 'express';
import controller from '../controllers/auth';
const router = express.Router();

router.post('/', controller.registerUser);
router.get('/', controller.getAllUsers);

export = router;