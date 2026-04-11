import express, { Request, Response } from 'express'; // 👈 Explicitly import Response here
import Task from '../models/Task';
import { protectNode, AuthRequest } from '../middleware/authMiddleware';

const router = express.Router();

// 📥 GET all tasks for the logged-in user
// Use 'Response' from express, not the global one
router.get('/', protectNode, async (req: AuthRequest, res: Response) => {
    try {
        const tasks = await Task.find({ user: req.user.id }).sort({ createdAt: -1 });
        res.json(tasks); // Now TypeScript knows this exists
    } catch (err) {
        res.status(500).send("SERVER_SYNC_ERROR");
    }
});

// 📤 POST a new task
router.post('/', protectNode, async (req: AuthRequest, res: Response) => {
    try {
        const newTask = new Task({
            user: req.user.id,
            title: req.body.title,
            priority: req.body.priority || 'MEDIUM'
        });
        const task = await newTask.save();
        res.json(task);
    } catch (err) {
        res.status(500).send("INJECTION_FAILED");
    }
});
// 🗑️ DELETE: Purge a specific objective
router.delete('/:id', protectNode, async (req: AuthRequest, res: Response) => {
    try {
        const task = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
        if (!task) return res.status(404).json({ msg: "OBJECTIVE_NOT_FOUND" });
        res.json({ msg: "OBJECTIVE_PURGED" });
    } catch (err) {
        res.status(500).send("PURGE_PROTOCOL_FAILED");
    }
});

// 🔄 PATCH: Toggle completion status
router.patch('/:id', protectNode, async (req: AuthRequest, res: Response) => {
    try {
        const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
        if (!task) return res.status(404).json({ msg: "OBJECTIVE_NOT_FOUND" });

        // Toggle between PENDING and SYNCED
        task.status = task.status === 'PENDING' ? 'SYNCED' : 'PENDING';
        await task.save();

        res.json(task);
    } catch (err) {
        res.status(500).send("STATUS_SYNC_FAILED");
    }
});

// 📊 GET: Neural Statistics
router.get('/stats/metrics', protectNode, async (req: AuthRequest, res: Response) => {
    try {
        const totalTasks = await Task.countDocuments({ user: req.user.id });
        const completedTasks = await Task.countDocuments({ user: req.user.id, status: 'SYNCED' });
        
        // Calculate Sync Integrity (Percentage)
        const syncIntegrity = totalTasks > 0 
            ? Math.round((completedTasks / totalTasks) * 100) 
            : 0;

        // Count tasks created in the last 24 hours (Neural Load)
        const yesterday = new Date(Date.now() - 24 * 60 * 60 * 1000);
        const dailyLoad = await Task.countDocuments({ 
            user: req.user.id, 
            createdAt: { $gte: yesterday } 
        });

        res.json({
            totalTasks,
            completedTasks,
            syncIntegrity,
            dailyLoad
        });
    } catch (err) {
        res.status(500).send("METRICS_CALCULATION_ERROR");
    }
});

export default router;