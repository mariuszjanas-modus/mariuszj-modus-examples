import express, { Application, Request, Response } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import rateLimit from 'express-rate-limit';
import dotenv from 'dotenv';
import { errorHandler } from './middleware/errorHandler.js';
import apiRoutes from './routes/index.js';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;

// Reject wildcard CORS origin at startup — a misconfigured env should fail loudly
const corsOrigin = process.env.CORS_ORIGIN || 'http://localhost:3001';
if (corsOrigin === '*') {
  throw new Error('CORS_ORIGIN must not be "*". Set a specific allowed origin.');
}

// Security headers (X-Content-Type-Options, X-Frame-Options, HSTS, etc.)
app.use(helmet());

// CORS
app.use(cors({ origin: corsOrigin }));

// Rate limiting — 100 requests per minute per IP across all API routes
const limiter = rateLimit({
  windowMs: 60_000,
  max: 100,
  standardHeaders: true,
  legacyHeaders: false,
});
app.use(limiter);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use('/api', apiRoutes);

app.get('/health', (_req: Request, res: Response) => {
  res.json({ status: 'ok' });
});

// Error handling
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
