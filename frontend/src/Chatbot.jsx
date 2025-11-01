// import { useState } from 'react'

// import './App.css'

// function Chatbot() {

//   return (
//     <>
//      <h1>Inside Chatbot</h1>
//     </>
//   )
// }

// export default Chatbot


import { useState, useRef, useEffect } from "react";
import axios from "axios";

function Chatbot() {
  const [input, setInput] = useState("");
  const [chat, setChat] = useState([]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef(null);

  // Convert chat to Gemini API format
  const toGeminiHistory = () =>
    chat.map((m) => ({
      role: m.role === "You" ? "user" : "model",
      parts: [m.text],
    }));

  // Send user message
  const handleAsk = async () => {
    const message = input.trim();
    if (!message) return;

    const newChat = [...chat, { role: "You", text: message }];
    setChat(newChat);
    setInput("");
    setLoading(true);

    try {
      // const baseURL = import.meta.env.VITE_API_BASE_URL;
      const res = await axios.post(`http://127.0.0.1:8000/chat`, {
        message,
        history: toGeminiHistory(),
      });
      setChat([...newChat, { role: "Bot", text: res.data.answer }]);
    } catch (error) {
      console.error(error);
      setChat([...newChat, { role: "Bot", text: "⚠️ Error getting response" }]);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleAsk();
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [chat]);

  return (
    <div
      style={{
        height: "100vh",
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(to bottom right, #eef2ff, #e0e7ff)",
      }}
    >
      {/* --- Header --- */}
      <header
        style={{
          background:
            "linear-gradient(to right, #2563eb, #3b82f6, #60a5fa)",
          padding: "16px 32px",
          color: "white",
          fontWeight: "600",
          fontSize: "1.3rem",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        💬 Gemini Q&A Chat
      </header>

      {/* --- Chat Container --- */}
      <main
        style={{
          flex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          maxWidth: "1100px",
          margin: "0 auto",
          width: "100%",
          height: "100%",
          padding: "20px",
        }}
      >
        {/* --- Chat Messages --- */}
        <div
          style={{
            flex: 1,
            overflowY: "auto",
            display: "flex",
            flexDirection: "column",
            gap: 12,
            padding: "16px 10px",
            borderRadius: 12,
            background: "white",
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          {chat.length === 0 && (
            <div
              style={{
                textAlign: "center",
                color: "#9ca3af",
                marginTop: "20%",
              }}
            >
              <p>Start chatting with Gemini 🤖</p>
            </div>
          )}

          {chat.map((m, i) => (
            <div
              key={i}
              style={{
                alignSelf: m.role === "You" ? "flex-end" : "flex-start",
                background: m.role === "You" ? "#2563eb" : "#e5e7eb",
                color: m.role === "You" ? "white" : "black",
                padding: "10px 14px",
                borderRadius: 12,
                maxWidth: "75%",
                lineHeight: 1.5,
                whiteSpace: "pre-wrap",
              }}
            >
              <strong>{m.role}: </strong> {m.text}
            </div>
          ))}

          {loading && (
            <div
              style={{
                alignSelf: "flex-start",
                fontStyle: "italic",
                color: "#6b7280",
              }}
            >
              Bot is thinking...
            </div>
          )}
          <div ref={chatEndRef} />
        </div>

        {/* --- Input Box --- */}
        <div
          style={{
            display: "flex",
            gap: 10,
            marginTop: 16,
            padding: 12,
            backgroundColor: "white",
            borderRadius: 12,
            boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
          }}
        >
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            rows={1}
            placeholder="Ask something..."
            style={{
              flex: 1,
              resize: "none",
              borderRadius: 8,
              border: "1px solid #ddd",
              padding: 12,
              fontSize: 15,
              outline: "none",
              fontFamily: "system-ui, sans-serif",
            }}
          />
          <button
            onClick={handleAsk}
            disabled={loading}
            style={{
              backgroundColor: "#2563eb",
              color: "white",
              border: "none",
              borderRadius: 8,
              padding: "12px 20px",
              fontWeight: "bold",
              cursor: loading ? "not-allowed" : "pointer",
              opacity: loading ? 0.7 : 1,
              transition: "background 0.3s ease",
            }}
          >
            {loading ? "..." : "Send"}
          </button>
        </div>
      </main>
    </div>
  );
}

export default Chatbot;