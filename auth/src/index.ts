import express from 'express';
import 'express-async-errors';
import { currentUserRouter } from './routes/currentUser';
import { signinRouter } from './routes/signIn';
import { signoutRouter } from './routes/signOut';
import { signupRouter } from './routes/signUp';
import { errorHandler } from './middlewares/errorHandling';
import { NotFoundError } from './errors/notFoundError';
import mongoose from 'mongoose';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.json());
app.set('trust proxy', true);
app.use(
  cookieSession({
    secure: true,
    signed: false,
  })
);
app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

const start = async () => {
  try {
    await mongoose.connect('mongodb://auth-mongo-srv:27017/auth');
  } catch (err) {
    console.log(err);
  }

  app.listen(3000, () => {
    console.log('listening on port 3000');
  });
};

start();
