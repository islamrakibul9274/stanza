import mongoose, { Schema, Document, Model } from "mongoose";

export interface IProject extends Document {
  user?: mongoose.Types.ObjectId;
  title: string;
  script: string;
  voiceId: string;
  voiceName: string;
  audioUrl?: string;
  duration?: number;
  wordCount: number;
  language: string;
  isFavorite: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const ProjectSchema = new Schema<IProject>(
  {
    user: { type: Schema.Types.ObjectId, ref: "User" },
    title: { type: String, required: true, default: "Untitled Script" },
    script: { type: String, required: true },
    voiceId: { type: String, required: true, default: "adam" },
    voiceName: { type: String, required: true, default: "Adam (Narrative)" },
    audioUrl: { type: String },
    duration: { type: Number, default: 0 },
    wordCount: { type: Number, default: 0 },
    language: { type: String, default: "en-US" },
    isFavorite: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Project: Model<IProject> =
  mongoose.models.Project || mongoose.model<IProject>("Project", ProjectSchema);
