// src/config/gemini.js
import { GoogleGenerativeAI } from '@google/generative-ai';

let genAI;

export const initializeGeminiClient = (apiKey) => {
    if (!genAI && apiKey) {
        genAI = new GoogleGenerativeAI(apiKey);
        console.log("Gemini Client Initialized with key:", apiKey ? "YES" : "NO");
    }
};

export const getGeminiModel = () => {
    if (!genAI) {
        throw new Error("Gemini Client not initialized!");
    }

    return genAI.getGenerativeModel({
        model: "models/gemini-2.0-flash",  // CORRECT MODEL (FREE & WORKING)
        
        // THIS FIXES **BOLD** AND BULLET POINTS FOREVER
        systemInstruction: `You are a professional, warm real estate agent on an outbound call.
Speak in short, natural, plain sentences like a real human.
Never use bullet points, lists, **bold**, *italic*, or any markdown.
Never use asterisks (*) for any reason.
Always respond in clean plain text only.
Be helpful and try to book a property viewing.`
    });
};

