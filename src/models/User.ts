import mongoose, { Schema } from 'mongoose';
import IUser from '../interfaces/user';

const UserSchema: Schema = new Schema({
  name: String
})

export default mongoose.model<IUser>('User', UserSchema);