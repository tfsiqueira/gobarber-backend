import { Router } from 'express';

import CreateSessionsUserService from '../services/CreateSessionsUserService';

const sessionsRouter = Router();

sessionsRouter.post('/', async (request, response) => {
  const { email, password } = request.body;

  const autenticateUser = new CreateSessionsUserService();

  const { user, token } = await autenticateUser.execute({
    email,
    password,
  });

  delete user.password;

  return response.json({ user, token });
});

export default sessionsRouter;
