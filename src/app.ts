import express from 'express';
import router from './routes';

const app = express();

app.get('/api/ready', (_req, res) => res.send());
app.use(express.urlencoded({ extended: true }));
app.use('/api', router);

export default app;
