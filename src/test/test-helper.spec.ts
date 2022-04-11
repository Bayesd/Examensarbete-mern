import mongoose from 'mongoose'
import 'dotenv/config';
import { connectDB } from '../config/db';

mongoose.Promise = global.Promise;

before((done) => {
  connectDB();
  mongoose.connection
    .once('open', () => { done(); })
    .on('error', (error:any) => {
      console.warn('Error', error)
    });
})

beforeEach((done) => {
  mongoose.connection.collections.users.drop(() => {
    done();
  })
})