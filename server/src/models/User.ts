import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  neuralId: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  accessKey: { type: String, required: true },
  tier: { type: String, enum: ['BASIC', 'NEURAL_PLUS', 'IMMORTAL'], default: 'BASIC' },
  syncDate: { type: Date, default: Date.now }
});

export default mongoose.model('User', UserSchema);