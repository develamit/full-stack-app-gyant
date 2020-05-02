import express from 'express';
import data from '../src/testData';

const router = express.Router();

router.get('/cases', (req, res) => {
  res.send({ cases: data.contests });
});

export default router;
