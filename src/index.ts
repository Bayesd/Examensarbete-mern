import express from 'express';
import cors from 'cors';
import authRoutes from './routes/auth';
import 'dotenv/config';
import { connectDB } from './config/db';

const router = express();

connectDB();

router.use(cors())
router.use(express.urlencoded({ extended: false }));
router.use(express.json());

router.use('/auth', authRoutes);

const PORT = process.env.PORT || 5001;

router.listen(PORT, () => {
  console.log(`Server listens on ${PORT}`);
});