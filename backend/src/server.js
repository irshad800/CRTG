import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import callRoutes from './routes/callRoutes.js';
import { initializeGeminiClient } from './config/gemini.js'; // <-- Import the initializer

// 1. Load environment variables FIRST
dotenv.config();

// 2. Initialize the Gemini client using the environment variable
// NOW process.env.GEMINI_API_KEY is defined!
initializeGeminiClient(process.env.GEMINI_API_KEY);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/call', callRoutes);

app.get('/', (req, res) => {
    res.send('<h1>CRTG Real Estate AI Backend – Clean Architecture + Gemini 1.5 Flash</h1>');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
    console.log(`Test: POST http://localhost:${PORT}/call/start`);
});