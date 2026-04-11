import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export interface AuthRequest extends Request {
    user?: any;
}

export const protectNode = (req: AuthRequest, res: Response, next: NextFunction) => {
    // 🛰️ Extract token from the "Authorization" header
    const token = req.header('Authorization')?.split(' ')[1];

    if (!token) {
        return res.status(444).json({ msg: "NO_NEURAL_SIGNATURE_DETECTED" });
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string);
        req.user = decoded; // Attach the user ID to the request
        next();
    } catch (err) {
        res.status(401).json({ msg: "SIGNATURE_VERIFICATION_FAILED" });
    }
};