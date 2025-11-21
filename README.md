# CRTG – AI Real-Estate Outbound Call Simulator  
**Candidate:** Irshad  
**Email:** irshad800@gmail.com **Phone:** +971 56 302 0773  
**GitHub:** https://github.com/irshad800/CRTG  
**Loom Demo (1:45 mins):** https://drive.google.com/file/d/1qPSf3LWSKMWBXiiGKZBcQOiIO4b2-GH_/view?usp=drive_link  

### LIVE DEPLOYED VERSION (No setup needed)

**Frontend (React Chat UI)**  
https://crtg-frontend.onrender.com  

**Backend API (Node.js + Google Gemini 1.5 Flash)**  
https://crtg-2.onrender.com  

### Live API Endpoints (Ready to test)

| Method | Endpoint                                 | Purpose                                      |
|--------|------------------------------------------|----------------------------------------------|
| POST   | https://crtg-2.onrender.com/call/start   | Returns `{ "call_id": "...", "status":"started" }` |
| POST   | https://crtg-2.onrender.com/call/transcript | Sends user text → Gemini → returns bot reply |
| GET    | https://crtg-2.onrender.com/call/history/:id | Returns full conversation history (JSON)     |

**Example history:**  
https://crtg-2.onrender.com/call/history/1630eb29d17cdabd

### Tech Stack
- Backend: Node.js + Express  
- LLM: Google Gemini 1.5 Flash (free tier)  
- Frontend: React + Vite + Axios  
- Storage: In-memory (Map) – conversation persists per call_id  
- Deployment: Render (free tier)

### Features Delivered (All mandatory + extras)
- 3 required endpoints working perfectly  
- Professional real-estate outbound agent role (short, natural, plain-text replies – no **bold**, no bullets, no asterisks)  
- Full conversation history stored & retrievable  
- Clean modular architecture (config → services → controllers → routes)  
- systemInstruction used to enforce clean responses  
- .env + .env.example (no hard-coded keys)  
- Comprehensive error handling & status codes  
- Beautiful optional React frontend (highly valued)  
- Live deployment on Render for instant testing  

### Folder Structure# CRTG – AI Real-Estate Outbound Call Simulator  
**Candidate:** Irshad  
**Email:** irshad800@gmail.com **Phone:** +971 56 302 0773  
**GitHub:** https://github.com/irshad800/CRTG  
**Loom Demo (1:45 mins):** https://drive.google.com/file/d/1qPSf3LWSKMWBXiiGKZBcQOiIO4b2-GH_/view?usp=drive_link  

### LIVE DEPLOYED VERSION (No setup needed)

**Frontend (React Chat UI)**  
https://crtg-frontend.onrender.com  

**Backend API (Node.js + Google Gemini 1.5 Flash)**  
https://crtg-2.onrender.com  

### Live API Endpoints (Ready to test)

| Method | Endpoint                                 | Purpose                                      |
|--------|------------------------------------------|----------------------------------------------|
| POST   | https://crtg-2.onrender.com/call/start   | Returns `{ "call_id": "...", "status":"started" }` |
| POST   | https://crtg-2.onrender.com/call/transcript | Sends user text → Gemini → returns bot reply |
| GET    | https://crtg-2.onrender.com/call/history/:id | Returns full conversation history (JSON)     |

**Example history:**  
https://crtg-2.onrender.com/call/history/1630eb29d17cdabd

### Tech Stack
- Backend: Node.js + Express  
- LLM: Google Gemini 1.5 Flash (free tier)  
- Frontend: React + Vite + Axios  
- Storage: In-memory (Map) – conversation persists per call_id  
- Deployment: Render (free tier)

### Features Delivered (All mandatory + extras)
- 3 required endpoints working perfectly  
- Professional real-estate outbound agent role (short, natural, plain-text replies – no **bold**, no bullets, no asterisks)  
- Full conversation history stored & retrievable  
- Clean modular architecture (config → services → controllers → routes)  
- systemInstruction used to enforce clean responses  
- .env + .env.example (no hard-coded keys)  
- Comprehensive error handling & status codes  
- Beautiful optional React frontend (highly valued)  
- Live deployment on Render for instant testing  

### Folder Structure
CRTG/
├── backend/
│   ├── src/
│   │   ├── config/        gemini.js
│   │   ├── controllers/   callController.js
│   │   ├── routes/        callRoutes.js
│   │   └── server.js
│   ├── .env.example
│   └── package.json
├── frontend/
│   ├── src/App.jsx + App.css (beautiful chat UI)
│   └── vite.config.js (proxy to backend)
└── README.md (this file)


### How to Run Locally
```bash
# Backend
cd backend
cp .env.example .env
# Add your GEMINI_API_KEY in .env
npm install
npm start   # runs on http://localhost:5000

# Frontend
cd frontend
npm install
npm run dev # runs on http://localhost:5173
