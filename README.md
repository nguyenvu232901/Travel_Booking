# Travel Booking Application

A full-stack travel booking application built with React.js, Node.js, Express.js, and MongoDB.

## 🚀 Quick Start with Docker

### Prerequisites
- Docker and Docker Compose installed on your machine
- Git

### Running the Application

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd Travel_Booking
   ```

2. **Start all services with Docker Compose**
   ```bash
   docker-compose up -d
   ```

3. **Access the application**
   - Frontend: http://localhost:3000
   - Backend API: http://localhost:8000
   - MongoDB Admin (Mongo Express): http://localhost:8081
     - Username: admin
     - Password: admin123

4. **Stop the application**
   ```bash
   docker-compose down
   ```

### Development Mode

For development with hot reload:

```bash
# Start only database
docker-compose up -d mongodb mongo-express

# Run backend in development mode
cd tour-management/backend
npm install
npm run start-dev

# Run frontend in development mode (in another terminal)
cd tour-management/frontend
npm install
npm start
```

## 📦 Services

- **Frontend**: React.js application served by Nginx
- **Backend**: Node.js/Express.js API server
- **Database**: MongoDB with initialization script
- **Admin**: Mongo Express for database management

## 🌐 Deployment to Render.com

### Backend Deployment

1. Create a new Web Service on Render
2. Connect your GitHub repository
3. Set build command: `cd tour-management/backend && npm install`
4. Set start command: `cd tour-management/backend && npm start`
5. Add environment variables:
   ```
   NODE_ENV=production
   PORT=8000
   MONGO_URI=<your-mongodb-atlas-connection-string>
   JWT_SECRET_KEY=<your-jwt-secret>
   ```

### Frontend Deployment

1. Create a new Static Site on Render
2. Connect your GitHub repository
3. Set build command: `cd tour-management/frontend && npm install && npm run build`
4. Set publish directory: `tour-management/frontend/build`
5. Add environment variable:
   ```
   REACT_APP_API_URL=<your-backend-render-url>/api/v1
   ```

## 🔧 Environment Variables

### Backend (.env)
```
NODE_ENV=development|production
PORT=8000
MONGO_URI=mongodb://...
JWT_SECRET_KEY=your_secret_key
```

### Frontend (.env)
```
REACT_APP_API_URL=http://localhost:8000/api/v1
```

## 📁 Project Structure

```
Travel_Booking/
├── tour-management/
│   ├── backend/          # Node.js API server
│   │   ├── controllers/  # Route controllers
│   │   ├── models/       # MongoDB models
│   │   ├── routes/       # API routes
│   │   ├── utils/        # Utility functions
│   │   └── Dockerfile    # Backend Docker config
│   └── frontend/         # React.js application
│       ├── src/          # Source code
│       ├── public/       # Static files
│       └── Dockerfile    # Frontend Docker config
├── docker-compose.yml    # Docker services configuration
└── mongo-init.js        # MongoDB initialization
```

## 🛠️ Technologies Used

### Backend
- Node.js & Express.js
- MongoDB & Mongoose
- JWT Authentication
- bcryptjs for password hashing

### Frontend
- React.js 18
- React Router DOM
- Bootstrap & Reactstrap
- Axios for API calls

### DevOps
- Docker & Docker Compose
- Nginx for serving React app
- MongoDB with initialization scripts
