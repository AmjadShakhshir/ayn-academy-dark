import express from 'express';
import cookieParser from 'cookie-parser';
import logger from'morgan';
import dotenv from 'dotenv';
import path from'path';
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.resolve(__dirname, '../.env') });
import { notFound, errorHandler } from './middleware/errorMiddleware.js';
import userRoutes from './routes/userRoutes.js';
import connectDB from './config/db.js';

connectDB();

var app = express();

app.get('/', (req, res) => {
    res.send('Server is ready');
});
app.use('/api/users', userRoutes);

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Error handling not get html error page
app.use(notFound);
app.use(errorHandler);
export default app;
