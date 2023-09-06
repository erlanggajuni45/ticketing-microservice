import express from 'express';
import 'express-async-errors';
import { currentUserRouter } from './routes/currentUser';
import { signinRouter } from './routes/signIn';
import { signoutRouter } from './routes/signOut';
import { signupRouter } from './routes/signUp';
import { errorHandler } from './middlewares/errorHandling';
import { NotFoundError } from './errors/notFoundError';
import cookieSession from 'cookie-session';

const app = express();

app.use(express.json());
app.set('trust proxy', true);
app.use(
  cookieSession({
    secure: process.env.NODE_ENV !== 'test',
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

export default app;
