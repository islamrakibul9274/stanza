export interface Voice {
  id: string;
  name: string;
  category: "Narration" | "Conversational" | "Commercial" | "Characters";
  gender: "Male" | "Female" | "Neutral";
  accent: string;
  description: string;
  previewUrl: string;
  speed: number;
  pitch: number;
}

export const VOICES: Voice[] = [
  {
    id: "adam",
    name: "Adam",
    category: "Narration",
    gender: "Male",
    accent: "American",
    description: "Deep, smooth, engaging tone ideal for audiobooks, documentaries, and long-form storytelling.",
    previewUrl: "https://res.cloudinary.com/dqaurp8tl/video/upload/v1/samples/audio/adam-sample.mp3",
    speed: 1.0,
    pitch: 1.0,
  },
  {
    id: "rachel",
    name: "Rachel",
    category: "Conversational",
    gender: "Female",
    accent: "American",
    description: "Calm, warm, and natural voice suited for podcasts, explainer videos, and brand intros.",
    previewUrl: "https://res.cloudinary.com/dqaurp8tl/video/upload/v1/samples/audio/rachel-sample.mp3",
    speed: 1.0,
    pitch: 1.05,
  },
  {
    id: "antoni",
    name: "Antoni",
    category: "Commercial",
    gender: "Male",
    accent: "British",
    description: "Polished, crisp, authoritative voice for tech presentations, keynote intros, and advertising.",
    previewUrl: "https://res.cloudinary.com/dqaurp8tl/video/upload/v1/samples/audio/antoni-sample.mp3",
    speed: 1.0,
    pitch: 0.95,
  },
  {
    id: "bella",
    name: "Bella",
    category: "Narration",
    gender: "Female",
    accent: "Australian",
    description: "Bright, articulate, and expressive cadence for guided audio tours, news summaries, and tutorials.",
    previewUrl: "https://res.cloudinary.com/dqaurp8tl/video/upload/v1/samples/audio/bella-sample.mp3",
    speed: 1.05,
    pitch: 1.1,
  },
  {
    id: "marcus",
    name: "Marcus",
    category: "Commercial",
    gender: "Male",
    accent: "American",
    description: "Warm baritone with commanding presence, built for trailers, video essays, and leadership talks.",
    previewUrl: "https://res.cloudinary.com/dqaurp8tl/video/upload/v1/samples/audio/marcus-sample.mp3",
    speed: 0.98,
    pitch: 0.9,
  },
  {
    id: "charlotte",
    name: "Charlotte",
    category: "Conversational",
    gender: "Female",
    accent: "Swedish / European",
    description: "Gentle, sophisticated, whisper-soft tone optimal for meditation, wellness apps, and ASMR.",
    previewUrl: "https://res.cloudinary.com/dqaurp8tl/video/upload/v1/samples/audio/charlotte-sample.mp3",
    speed: 0.95,
    pitch: 1.0,
  },
];
