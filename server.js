require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { sequelize } = require('./models');

const app = express();

// 🔐 CORS Configuration
const corsOptions = {
  origin: process.env.NODE_ENV === 'production' 
    ? process.env.FRONTEND_URL?.split(',') || []
    : ['http://localhost:5173', 'http://localhost:3000', 'http://127.0.0.1:5173'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true
};

app.use(cors(corsOptions));
app.use(express.json());

// 📦 Routes
app.use('/api/auth', require('./routes/authRoutes'));
app.use('/api/projects', require('./routes/projectRoutes'));
app.use('/api/skills', require('./routes/skillRoutes'));

// 🏠 Home Route
app.get('/', (req, res) => {
  res.json({
    message: '✅ Portfolio API Backend',
    version: '1.0.0',
    environment: process.env.NODE_ENV || 'development',
    endpoints: {
      auth: '/api/auth',
      projects: '/api/projects', 
      skills: '/api/skills'
    }
  });
});

// 🚀 Start Server
const PORT = process.env.PORT || 3000;

// Sync database & start server
const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log('🗄️ Database connected!');
    
    // ⚠️ Untuk production, gunakan migrations & hindari sync()
    if (process.env.NODE_ENV !== 'production') {
      await sequelize.sync({ alter: true }); // Auto-update schema (dev only)
      console.log('🔄 Database synced (dev mode)');
    }
    
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(`📚 API Docs: http://localhost:${PORT}`);
      console.log(`🔗 CORS allowed: ${corsOptions.origin.join(', ')}`);
    });
  } catch (err) {
    console.error('❌ Failed to start server:', err);
    process.exit(1);
  }
};

startServer();