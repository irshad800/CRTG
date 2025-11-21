import express from 'express';
import { startCall, handleTranscript, getHistory } from '../controllers/callController.js';

const router = express.Router();

router.post('/start', startCall);
router.post('/transcript', handleTranscript);
router.get('/history/:id', getHistory);

export default router;