import cors from 'cors';
import express from 'express';
import serverError from './middlewares/serverError';
import routerLogin from './routers/routerLogin';
import routerTask from './routers/routerTask';
import routerUser from './routers/routerUser';
import 'dotenv/config'

const app = express();
app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/user', routerUser);
app.use('/login', routerLogin);
app.use('/task', routerTask);
app.get('/', (_req, res) => res.json({ message: 'active server' }));
app.use(serverError);

app.listen(+PORT, () => {
  console.log(`Online at the Port ${PORT}`);
});

export default app;
