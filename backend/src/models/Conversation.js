export class Conversation {
  constructor() {
    this.messages = []; // [{ from: "user" | "bot", text: string }]
  }

  addUserMessage(text) {
    this.messages.push({ from: "user", text: text.trim() });
  }

  addBotMessage(text) {
    this.messages.push({ from: "bot", text });
  }

  getAllMessages() {
    return this.messages;
  }

  getHistoryForGemini() {
    return this.messages.slice(0, -1).map(msg => ({
      role: msg.from === "bot" ? "model" : "user",
      parts: [{ text: msg.text }]
    }));
  }

  getLastUserMessage() {
    return this.messages.at(-1)?.text || "";
  }
}