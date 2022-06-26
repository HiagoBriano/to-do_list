import express from 'express';
import routerUser from './routers/routerUser';

const app = express();
app.use(express.json());

const PORT = 3000;

app.use('/user', routerUser);

app.listen(PORT, () => {
  console.log(`Online at the Port ${PORT}`);
});
