# 🎙️ Stanza — The Modern AI Voice & Script Studio

Stanza is a production-grade, minimal SaaS platform designed for content creators, media teams, and audio producers. Inspired by ElevenLabs' Swiss editorial UI, Stanza brings together ultra-fast LLM script generation, dynamic voice synthesis, real-time team collaboration, and cloud media asset delivery.

---

## 🛠️ Tech Stack & Infrastructure

- **Framework**: Next.js 15 (App Router) & React 19
- **Design System**: Tailored ElevenLabs aesthetic with Tailwind CSS & Framer Motion
- **AI Engine**: Groq SDK (`llama-3.3-70b-versatile` & `llama-3.1-8b-instant`)
- **Real-Time Multiplayer**: Pusher Channels & Presence
- **Database & ODM**: MongoDB Atlas & Mongoose
- **Media CDN**: Cloudinary for audio asset hosting & streaming
- **Payments & Billing**: Stripe Checkout & Customer Portal
- **Email Infrastructure**: Resend for transactional onboarding & receipts

---

## 🚀 Key Features

1. **Studio Playground (`/studio`)**:
   - High-fidelity scriptwriting canvas with live character / word count and duration estimator.
   - Groq AI Copilot: Polish cadence, compose podcast hooks, and draft commercial ad copy in milliseconds.
   - Voice Model Selector: Curated catalog of human voice profiles with customizable accents and categories.
   - Interactive Waveform Player: Scrubbable audio waveform with playback speed controls and instant browser speech synthesis.

2. **Multiplayer Live Collaboration**:
   - Pusher presence integration showing active studio collaborators in real-time.
   - Live project sync across studio instances.

3. **Production Library (`/library`)**:
   - Non-volatile MongoDB Atlas storage for all draft scripts and audio productions.
   - One-click copy, quick open, and project management.

4. **Stripe Billing (`/pricing`)**:
   - Tiered plans: Starter ($0), Creator ($19/mo), and Pro Studio ($49/mo).
   - Instant Stripe Checkout session initialization and webhook processing.

---

## ⚙️ Quick Start

### 1. Install dependencies
```bash
npm install
```

### 2. Configure Environment (`.env.local`)
Create `.env.local` and add your service credentials:
```env
MONGODB_URI="..."
GROQ_API_KEY="..."
STRIPE_SECRET_KEY="..."
STRIPE_WEBHOOK_SECRET="..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="..."
PUSHER_APP_ID="..."
NEXT_PUBLIC_PUSHER_KEY="..."
PUSHER_SECRET="..."
NEXT_PUBLIC_PUSHER_CLUSTER="..."
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."
RESEND_API_KEY="..."
AUTH_SECRET="..."
```

### 3. Run Development Server
```bash
npm run dev
```

Visit `http://localhost:3000` to access the Stanza Studio.