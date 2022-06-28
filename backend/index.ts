import express from 'express';
import routerLogin from './routers/routerLogin';
import routerTask from './routers/routerTask';
import routerUser from './routers/routerUser';
require('dotenv/config');

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 3001;

app.use('/user', routerUser);
app.use('/login', routerLogin);
app.use('/task', routerTask);
app.get('/', (_req, res) => res.json({ message: 'active server' }));

app.listen(+PORT, () => {
  console.log(`Online at the Port ${PORT}`);
});
