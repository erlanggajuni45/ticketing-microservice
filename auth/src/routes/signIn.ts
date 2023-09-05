import express, { Request, Response } from 'express';
import { body } from 'express-validator';
import { validateRequest } from '../middlewares/validationHandling';

const router = express.Router();

router.post(
  '/api/users/signin',
  [
    body('email').isEmail().withMessage('Email must be valid'),
    body('password').trim().notEmpty().withMessage('Please provide the password'),
  ],
  validateRequest,
  (req: Request, res: Response) => {
    res.send('Hi there');
  }
);

export { router as signinRouter };
