import express from 'express';
import 'express-async-errors';
import { currentUserRouter } from './routes/currentUser';
import { signinRouter } from './routes/signIn';
import { signoutRouter } from './routes/signOut';
import { signupRouter } from './routes/signUp';
import { errorHandler } from './middlewares/errorHandling';
import { NotFoundError } from './errors/notFoundError';

const app = express();

app.use(express.json());

app.use(currentUserRouter);
app.use(signinRouter);
app.use(signoutRouter);
app.use(signupRouter);

app.all('*', async () => {
  throw new NotFoundError();
});

app.use(errorHandler);

app.listen(3000, () => {
  console.log('listening on port 3000');
});
