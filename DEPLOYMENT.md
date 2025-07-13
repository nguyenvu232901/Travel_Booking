# Deployment Guide for Render.com

## Prerequisites

1. **MongoDB Atlas Account** (Free tier available)
   - Create a cluster at https://cloud.mongodb.com
   - Get your connection string
   - Whitelist all IPs (0.0.0.0/0) for Render deployment

2. **Render.com Account** (Free tier available)
   - Sign up at https://render.com
   - Connect your GitHub account

## Step 1: Setup MongoDB Atlas

1. Create a new cluster on MongoDB Atlas
2. Create a database user with read/write permissions
3. Get your connection string (should look like):
   ```
   mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/travel_booking?retryWrites=true&w=majority
   ```
4. Replace `travel_booking` with your preferred database name

## Step 2: Deploy Backend to Render

1. **Create a new Web Service**
   - Go to Render Dashboard
   - Click "New" → "Web Service"
   - Connect your GitHub repository

2. **Configure the service**
   - Name: `travel-booking-backend`
   - Environment: `Node`
   - Build Command: `cd tour-management/backend && npm install`
   - Start Command: `cd tour-management/backend && npm start`
   - Instance Type: `Free` (or paid for better performance)

3. **Set Environment Variables**
   ```
   NODE_ENV=production
   PORT=8000
   MONGO_URI=<your-mongodb-atlas-connection-string>
   JWT_SECRET_KEY=<generate-a-strong-secret-key>
   ```

4. **Deploy**
   - Click "Create Web Service"
   - Wait for deployment to complete
   - Note your backend URL (e.g., `https://travel-booking-backend.onrender.com`)

## Step 3: Deploy Frontend to Render

1. **Create a new Static Site**
   - Go to Render Dashboard
   - Click "New" → "Static Site"
   - Connect the same GitHub repository

2. **Configure the site**
   - Name: `travel-booking-frontend`
   - Build Command: `cd tour-management/frontend && npm install && npm run build`
   - Publish Directory: `tour-management/frontend/build`

3. **Set Environment Variables**
   ```
   REACT_APP_API_URL=https://travel-booking-backend.onrender.com/api/v1
   ```
   (Replace with your actual backend URL from Step 2)

4. **Deploy**
   - Click "Create Static Site"
   - Wait for deployment to complete

## Step 4: Update CORS Settings

After deployment, you may need to update CORS settings in your backend:

1. Edit `tour-management/backend/index.js`
2. Update corsOptions to include your frontend URL:
   ```javascript
   const corsOptions = {
       origin: [
           "http://localhost:3000",
           "https://your-frontend-url.onrender.com"
       ],
       credentials: true,
   };
   ```

## Step 5: Test Your Deployment

1. Visit your frontend URL
2. Test user registration and login
3. Test tour booking functionality
4. Check browser console for any errors

## Troubleshooting

### Common Issues:

1. **CORS Errors**
   - Make sure frontend URL is added to CORS origins
   - Check that credentials are properly configured

2. **Database Connection Issues**
   - Verify MongoDB Atlas connection string
   - Ensure IP whitelist includes 0.0.0.0/0
   - Check database user permissions

3. **Build Failures**
   - Check build logs in Render dashboard
   - Ensure all dependencies are listed in package.json
   - Verify Node.js version compatibility

4. **Environment Variables**
   - Double-check all environment variables are set
   - Ensure no trailing spaces in values
   - Verify JWT_SECRET_KEY is set and secure

### Free Tier Limitations:

- Services may sleep after 15 minutes of inactivity
- Limited bandwidth and build minutes
- Slower cold start times

### Performance Tips:

- Use paid plans for production applications
- Implement proper error handling and logging
- Add health check endpoints
- Consider using CDN for static assets

## Monitoring

- Check Render dashboard for service health
- Monitor application logs for errors
- Set up alerts for service downtime

## Security Considerations

- Use strong JWT secret keys
- Implement rate limiting
- Validate all user inputs
- Use HTTPS only in production
- Keep dependencies updated
