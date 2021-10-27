import express from 'express';
import router from './routes';

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json({ limit: '1mb' }));

app.get('/api/ready', (_req, res) => res.send());
app.use('/api', router);

export default app;
