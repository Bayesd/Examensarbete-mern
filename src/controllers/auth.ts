import { NextFunction, Request, Response } from 'express';
import mongoose from 'mongoose';
import User from '../models/User';

const registerUser = async (req: Request, res: Response) => {
  let { name } = req.body;

  const user = await new User({
    _id: new mongoose.Types.ObjectId(),
    name
  });

  if (!name) {
    res.status(500).json('Could not create user');
  }

  const u = await user.save();
  return res.status(201).json({
    user: u,
  });
};

const getAllUsers = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await User.find().exec();
  return res.status(200).json({
    user,
    count: user.length,
  });
};

export default { registerUser, getAllUsers };