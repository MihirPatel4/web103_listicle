import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import MobController from '../controllers/mobController.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const router = express.Router();

router.get('/', MobController.getMobs);

router.get('/:mobName', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/mob.html'));
});

export default router;