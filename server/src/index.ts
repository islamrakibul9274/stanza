import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/authRoutes';
import taskRoutes from './routes/taskRoutes';

// 1️⃣ [SYSTEM]: Initialize environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5001;
const MONGO_URI = process.env.MONGO_URI;

// 2️⃣ [SYSTEM]: Validate Critical Environment Variables
console.log("🛠️ [DIAGNOSTICS]: Checking Environment Configuration...");
if (!MONGO_URI) {
    console.error("❌ CRITICAL_ERROR: MONGO_URI is not defined in .env");
    process.exit(1); 
}

// 🛰️ [SYSTEM]: Global CORS Configuration
const corsOptions = {
    origin: [
        'http://localhost:5173', 
        'https://aether-os-nine.vercel.app/' // Replace with your actual production Vercel URL
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
    optionsSuccessStatus: 204
};

// 3️⃣ [SYSTEM]: Registering Global Middleware
console.log("🛡️ [SYSTEM]: Initializing Middleware...");
app.use(cors(corsOptions));
app.use(express.json());

// 4️⃣ [SYSTEM]: Initializing Neural Gateway Routes
console.log("🔌 [SYSTEM]: Registering API Routes...");
app.use('/api/auth', authRoutes);
app.use('/api/tasks', taskRoutes);

// 🏠 [SYSTEM]: Base Health Check
app.get('/', (req, res) => {
    res.json({ 
        status: "AetherOS Core Online", 
        version: "4.2.0",
        timestamp: new Date().toISOString()
    });
});

// 5️⃣ [SYSTEM]: Attempting Database Connection & Server Launch
console.log("🧱 [SYSTEM]: Initiating Persistence Layer Handshake...");

mongoose.connect(MONGO_URI)
    .then(() => {
        console.log('🟢 [DATABASE]: NEURAL_PERSISTENCE_LAYER_CONNECTED');
        
        // 6️⃣ [SYSTEM]: Execute Server Listener
        app.listen(PORT, () => {
            console.log(`🚀 [SERVER]: NEURAL_CORE_RUNNING_ON_PORT_${PORT}`);
        });
    })
    .catch((err) => {
        console.error('🔴 [DATABASE]: SYNC_FAILED');
        console.error('📖 REASON:', err.message);
        process.exit(1); // Force exit on DB failure so host can restart
    });