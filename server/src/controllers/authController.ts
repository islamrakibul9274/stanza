import { Request, Response } from 'express';
import User from '../models/User';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export const establishHandshake = async (req: Request, res: Response) => {
  const { email, accessKey } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(404).json({ msg: "NODE_NOT_FOUND" });

    const isMatch = await bcrypt.compare(accessKey, user.accessKey);
    if (!isMatch) return res.status(401).json({ msg: "INVALID_CREDENTIALS" });

    // Issue Token
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET as string, { expiresIn: '24h' });

    res.json({
      token,
      user: {
        neuralId: user.neuralId,
        tier: user.tier
      }
    });
  } catch (error) {
    res.status(500).json({ msg: "SERVER_NEURAL_ERROR" });
  }
};

export const registerNeuralSignature = async (req: Request, res: Response) => {
    const { neuralId, email, accessKey, tier } = req.body;

    try {
        // 1. Check if the node already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ msg: "NODE_EMAIL_ALREADY_REGISTERED" });
        }

        // 2. Hash the Access Key (Security Phase)
        const salt = await bcrypt.genSalt(12);
        const hashedKey = await bcrypt.hash(accessKey, salt);

        // 3. Create the New User
        const newUser = new User({
            neuralId,
            email,
            accessKey: hashedKey,
            tier: tier || 'BASIC'
        });

        await newUser.save();

        // 4. Issue initial JWT for immediate access
        const token = jwt.sign(
            { id: newUser._id }, 
            process.env.JWT_SECRET as string, 
            { expiresIn: '24h' }
        );

        res.status(201).json({
            msg: "NEURAL_SIGNATURE_INITIALIZED",
            token,
            user: {
                neuralId: newUser.neuralId,
                tier: newUser.tier
            }
        });

    } catch (error) {
        console.error(error);
        res.status(500).json({ msg: "REGISTRATION_FAILURE" });
    }
};