import mongoose from 'mongoose';
import Express, { Request, Response, NextFunction } from 'express';
import { config } from './config';

const router = Express();

export const connectDB = async (): Promise<void> => {
  try {
    const conn = await mongoose.connect(config.mongo.url, {
      retryWrites: true,
      w: 'majority',
    });
    if (conn) {
      StartServer();
    } else {
      console.warn('Mongo did not connect');
    }
  } catch (e: any) {
    console.error(e);
    throw new Error(e.message);
  }
};

const StartServer = () => {
  router.use((req: Request, res: Response, next: NextFunction) => {
    console.log(
      `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
    );
    res.on('finish', () => {
      console.log(
        `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
      );
    });

    next();
  });
};