// services/server.js
import crypto from 'crypto';
import { Conversation } from '../models/Conversation.js';
import { generateReply } from './geminiService.js';

// In-memory DB
const calls = new Map();

export const startNewCall = () => {
  const call_id = crypto.randomBytes(8).toString('hex');
  calls.set(call_id, new Conversation());
  return call_id;
};

export const getConversation = (call_id) => {
  return calls.get(call_id) || null;
};

export const addUserMessageAndGetReply = async (call_id, text) => {
  const conv = getConversation(call_id);
  if (!conv) throw new Error("Call not found");

  conv.addUserMessage(text);

  try {
    const reply = await generateReply(conv);
    conv.addBotMessage(reply);
    return reply;
  } catch (error) {
    throw new Error(`Gemini failed: ${error.message}`);
  }
};

export const getFullHistory = (call_id) => {
  return calls.get(call_id)?.getAllMessages() || [];
};
