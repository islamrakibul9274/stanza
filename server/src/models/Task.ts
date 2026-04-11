import mongoose from 'mongoose';

const TaskSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    title: { type: String, required: true },
    status: { type: String, enum: ['PENDING', 'SYNCED', 'FAILED'], default: 'PENDING' },
    priority: { type: String, default: 'LOW' },
    createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Task', TaskSchema);