# CRTG Developer Test – AI Real Estate Call Agent

Live Demo: http://localhost:5173  
Backend API: http://localhost:5000

## Features
- Google Gemini 1.5 Flash (free & fast)
- MongoDB conversation storage
- Clean MVC architecture
- Beautiful minimal React chat UI
- Full error handling
- No hard-coded keys

## Quick Start (Windows/Mac/Linux)

```bash
# 1. Clone & install
git clone <your-repo>
cd crtg-gemini-realtor

# 2. Backend
cd backend
cp .env.example .env
# Put your Gemini key in .env
npm install
npm run dev

# 3. Frontend (new terminal)
cd ../frontend
npm install
npm run dev