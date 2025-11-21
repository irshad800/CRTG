import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const [callId, setCallId] = useState('');
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [started, setStarted] = useState(false);

  const startCall = async () => {
    try {
      const res = await axios.post('https://crtg-2.onrender.com/call/start');
      setCallId(res.data.call_id);
      setStarted(true);
      setMessages([]);
      addMessage('bot', 'Hello! This is Rahul from Dubai Properties. How may I assist you today with your real estate needs?');
    } catch (err) {
      alert('Backend not running! Start server first.');
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userText = input;
    addMessage('user', userText);
    setInput('');
    setLoading(true);

    try {
      const res = await axios.post('https://crtg-2.onrender.com/call/transcript', {
        call_id: callId,
        text: userText
      });
      addMessage('bot', res.data.reply);
    } catch (err) {
      addMessage('bot', 'Sorry, I am having trouble connecting. Please try again.');
    }
    setLoading(false);
  };

  const addMessage = (from, text) => {
    setMessages(prev => [...prev, { from, text }]);
  };

  return (
    <div className="app">
      <div className="container">
        <h1>Real Estate AI Call Simulator</h1>
        
        {!started ? (
          <div className="welcome">
            <p>Click below to start a live AI-powered property consultation</p>
            <button onClick={startCall} className="start-btn">
              Start Call
            </button>
          </div>
        ) : (
          <>
            <div className="chat">
              {messages.map((msg, i) => (
                <div key={i} className={`message ${msg.from}`}>
                  <div className="bubble">{msg.text}</div>
                </div>
              ))}
              {loading && (
                <div className="message bot">
                  <div className="bubble typing">Typing...</div>
                </div>
              )}
            </div>

            <div className="input-area">
              <input
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
                placeholder="Type your message here..."
                disabled={loading}
              />
              <button onClick={sendMessage} disabled={loading || !input.trim()}>
                Send
              </button>
            </div>
          </>
        )}

        <div className="footer">
          {callId && <small>Call ID: {callId}</small>}
        </div>
      </div>
    </div>
  );
}

export default App;