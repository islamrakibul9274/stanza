# 🎙️ Stanza — The Modern AI Voice & Script Studio

[![Next.js](https://img.shields.io/badge/Next.js-15.1-black?style=flat&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19-blue?style=flat&logo=react)](https://react.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38bdf8?style=flat&logo=tailwind-css)](https://tailwindcss.com/)
[![Deployed on Vercel](https://img.shields.io/badge/Vercel-Deployed-black?style=flat&logo=vercel)](https://stanzastudio.vercel.app)
[![Inference by Groq](https://img.shields.io/badge/Groq-Llama--3.3--70B-orange?style=flat)](https://groq.com/)
[![Payments by Stripe](https://img.shields.io/badge/Stripe-Subscriptions-635BFF?style=flat&logo=stripe)](https://stripe.com/)

> **Live Production Application**: **[https://stanzastudio.vercel.app](https://stanzastudio.vercel.app)**  
> **Studio Playground**: **[https://stanzastudio.vercel.app/studio](https://stanzastudio.vercel.app/studio)**  
> **Pricing & Plans**: **[https://stanzastudio.vercel.app/pricing](https://stanzastudio.vercel.app/pricing)**

---

Stanza is a production-grade, minimalist AI voice and script composition SaaS platform designed for content creators, media teams, and audio producers. Inspired by **ElevenLabs' Swiss editorial UI**, Stanza brings together sub-second LLM script generation via Groq, dynamic voice synthesis, real-time multiplayer collaboration via Pusher, and global CDN media streaming via Cloudinary.

---

## 🚀 Live Demo & Navigation

| Route | Link | Purpose |
| :--- | :--- | :--- |
| **Landing Page** | [stanzastudio.vercel.app](https://stanzastudio.vercel.app) | Editorial showcase with interactive embedded studio preview. |
| **Studio Playground** | [/studio](https://stanzastudio.vercel.app/studio) | Real-time script composition, Groq AI Copilot, voice selection, & waveform player. |
| **Project Library** | [/library](https://stanzastudio.vercel.app/library) | Non-volatile MongoDB Atlas archive of all draft scripts and audio tracks. |
| **Pricing & Plans** | [/pricing](https://stanzastudio.vercel.app/pricing) | Stripe subscription checkout (Starter $0, Creator $19/mo, Pro $49/mo). |

---

## 🛠️ Production Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/) (App Router, Server Components & Route Handlers)
- **UI Library**: [React 19](https://react.dev/)
- **Typography**: [Google Fonts Roboto & Roboto Mono](https://fonts.google.com/specimen/Roboto)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom Swiss Obsidian design system
- **AI Inference Engine**: [Groq SDK](https://groq.com/) (`llama-3.3-70b-versatile` & `llama-3.1-8b-instant`)
- **Real-Time Collaboration**: [Pusher Channels & Presence](https://pusher.com/)
- **Database & Storage**: [MongoDB Atlas](https://www.mongodb.com/atlas) with cached Mongoose connection
- **Media CDN**: [Cloudinary](https://cloudinary.com/) for media storage & edge audio delivery
- **Payment & Subscriptions**: [Stripe](https://stripe.com/) Checkout Sessions & Webhooks
- **Email Infrastructure**: [Resend](https://resend.com/) for transactional onboarding & receipts
- **Icons & Animation**: [Lucide React](https://lucide.dev/) & [Framer Motion](https://www.framer.com/motion/)

---

## ✨ Key Capabilities

1. **Editorial Studio Playground (`/studio`)**:
   - High-fidelity scriptwriting canvas with live character, word count, and speech duration estimation.
   - **Groq AI Copilot**: Sub-second generation to refine cadence, compose engaging podcast hooks, and draft commercial ad copy.
   - **Curated Voice Profiles**: Natural voice models (Adam, Rachel, Antoni, Bella, Marcus, Charlotte) with category and accent tagging.
   - **Interactive Waveform Player**: Scrubbable audio waveform with variable playback speed (`1.0x`, `1.25x`, `1.5x`, `2.0x`) and in-browser speech synthesis.

2. **Live Multiplayer Collaboration**:
   - Pusher presence integration broadcasting real-time collaborator counts in the studio.
   - Instant synchronizations when projects are created or deleted.

3. **Production Library (`/library`)**:
   - Persistent MongoDB Atlas storage for all scripts, durations, and allocated voice models.
   - Instant clipboard copying, quick deletion, and studio reloading.

4. **Stripe Billing & Subscriptions (`/pricing`)**:
   - Tiered plans: Starter ($0), Creator ($19/mo), and Pro Studio ($49/mo).
   - Automated credit tracking and Stripe webhook lifecycle processing.

---

## ⚙️ Local Development Setup

### 1. Clone the repository
```bash
git clone https://github.com/islamrakibul9274/stanza.git
cd stanza
```

### 2. Install dependencies
```bash
npm install
```

### 3. Configure Environment Variables
Create `.env.local` in the project root:
```env
# Database
MONGODB_URI="mongodb+srv://<user>:<password>@cluster0...mongodb.net/stanza"

# Authentication
AUTH_SECRET="your-auth-secret"
AUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-auth-secret"
NEXTAUTH_URL="http://localhost:3000"

# Groq AI Inference
GROQ_API_KEY="gsk_..."

# Stripe
STRIPE_SECRET_KEY="sk_test_..."
STRIPE_WEBHOOK_SECRET="whsec_..."
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY="pk_test_..."

# Resend
RESEND_API_KEY="re_..."

# Cloudinary
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME="..."
CLOUDINARY_API_KEY="..."
CLOUDINARY_API_SECRET="..."

# Pusher
PUSHER_APP_ID="..."
NEXT_PUBLIC_PUSHER_KEY="..."
PUSHER_SECRET="..."
NEXT_PUBLIC_PUSHER_CLUSTER="mt1"
```

### 4. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 5. Build for Production
```bash
npm run build
npm run start
```

---

## 📄 License
This project is open-source and available under the [MIT License](LICENSE).