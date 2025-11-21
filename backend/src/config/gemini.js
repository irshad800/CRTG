import { GoogleGenerativeAI } from '@google/generative-ai';

// Declare a variable to hold the initialized client
let genAI;

export const initializeGeminiClient = (apiKey) => {
    // Initialize ONLY when the API Key is passed in
    if (!genAI) {
        genAI = new GoogleGenerativeAI(apiKey);
        console.log("Gemini Client Initialized.");
    }
};

export const getGeminiModel = () => {
    if (!genAI) {
        throw new Error("Gemini Client not initialized. Call initializeGeminiClient first.");
    }
    
    return genAI.getGenerativeModel({
        model: "models/gemini-2.0-flash", // Note: Changed to the recommended "models/gemini-2.0-flash"
        generationConfig: {
            temperature: 0.7,
            maxOutputTokens: 150,
        },
    });
};