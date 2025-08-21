require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const mongoose = require('mongoose');

const app = express();

// Basic middlewares
app.use(helmet());
app.use(cors({
    origin: (origin, callback) => {
        // allow requests with no origin (like mobile apps, curl) or localhost/127.0.0.1:3000
        if (!origin) return callback(null, true);
        const allowed = /^http:\/\/(localhost|127\.0\.0\.1)(:3000)?$/.test(origin);
        return callback(null, allowed);
    },
    credentials: true,
    optionsSuccessStatus: 200
}));
app.use(express.json());
app.use(cookieParser());

// DB connect
async function connectDB() {
    const uri = process.env.MONGODB_URI;
    if (!uri) {
        console.error('Missing MONGODB_URI in .env');
        process.exit(1);
    }
    mongoose.set('strictQuery', true);
    await mongoose.connect(uri);
    console.log('MongoDB connected');
}

// Routes
const { authMiddleware } = require('./middleware/auth');
const authRoutes = require('./routes/auth');
const contactRoutes = require('./routes/contacts');
const productRoutes = require('./routes/products');

app.use(authMiddleware);

app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/products', productRoutes);

app.get('/', (_req, res) => res.send('API is running'));

const PORT = process.env.PORT || 4000;
connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    });
});