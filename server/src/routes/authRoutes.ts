import express, { Request, Response } from 'express'; // 👈 CRITICAL: Added imports
import { establishHandshake, registerNeuralSignature } from '../controllers/authController';
import User from '../models/User';
import { protectNode, AuthRequest } from '../middleware/authMiddleware';

const router = express.Router();

// 🛰️ Registration & Login Endpoints
router.post('/register', registerNeuralSignature);
router.post('/handshake', establishHandshake);

// 📡 GET current user profile
router.get('/me', protectNode, async (req: AuthRequest, res: Response) => {
    try {
        // req.user.id is injected by the protectNode middleware
        const user = await User.findById(req.user.id).select('-accessKey'); 
        
        if (!user) {
            return res.status(404).json({ msg: "NODE_NOT_FOUND" });
        }
        
        res.json(user);
    } catch (err) {
        res.status(500).send("PROFILE_SYNC_ERROR");
    }
});

export default router;