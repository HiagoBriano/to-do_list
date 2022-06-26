import express from 'express';
import routerLogin from './routers/routerLogin';
import routerTask from './routers/routerTask';
import routerUser from './routers/routerUser';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/user', routerUser);
app.use('/login', routerLogin);
app.use('/task', routerTask);
app.get('/', (_req, res) => res.json({ message: 'active server' }));

app.listen(PORT, () => {
  console.log(`Online at the Port ${PORT}`);
});
