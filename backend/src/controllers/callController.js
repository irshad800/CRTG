import { startNewCall, addUserMessageAndGetReply, getFullHistory } from '../services/server.js';

export const startCall = (req, res) => {
  const call_id = startNewCall();
  res.json({ call_id, status: "started" });
};

export const handleTranscript = async (req, res) => {
  const { call_id, text } = req.body;

  if (!call_id || !text?.trim()) {
    return res.status(400).json({ error: "call_id and text are required" });
  }

  try {
    const reply = await addUserMessageAndGetReply(call_id, text);
    res.json({ reply });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: "Failed to generate reply", details: error.message });
  }
};

export const getHistory = (req, res) => {
  const { id } = req.params;
  const history = getFullHistory(id);
  if (!history.length) {
    return res.status(404).json({ error: "Call not found" });
  }
  res.json(history);
};