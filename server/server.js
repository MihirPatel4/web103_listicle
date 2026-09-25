import express from 'express';
import './config/dotenv.js';
import mobsRouter from './routes/mobRoutes.js';

const PORT = process.env.PGPORT || 3001;
const app = express();

app.use(express.static('./public'));
app.use('/scripts', express.static('./public/scripts'));
app.use('/mobs', mobsRouter);

app.get('/', (req, res) => {
  res.status(200).send('<h1>The Minecraft Mob API</h1>')
});

app.listen(PORT, () => {
  console.log(`Server listening on http://localhost:${PORT}`);
});