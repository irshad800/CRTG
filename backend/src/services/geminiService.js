import { getGeminiModel } from '../config/gemini.js';

export const generateReply = async (conversation) => {
  const model = getGeminiModel();
  const chat = model.startChat({
    history: conversation.getHistoryForGemini(),
  });

  const result = await chat.sendMessage(conversation.getLastUserMessage());
  return result.response.text().trim();
};