# Testing Checklist for Travel Booking App Deployment

## Pre-Deployment Tests (Local)

### Backend API Tests
- [ ] Server starts successfully: `cd tour-management/backend && npm start`
- [ ] Health check endpoint: `GET http://localhost:4000/`
- [ ] Tours API: `GET http://localhost:4000/api/v1/tours`
- [ ] Users API: `GET http://localhost:4000/api/v1/users`
- [ ] Auth endpoints: `POST http://localhost:4000/api/v1/auth/register`
- [ ] Database connection successful

### Frontend Tests
- [ ] Frontend starts: `cd tour-management/frontend && npm start`
- [ ] Home page loads: `http://localhost:3000`
- [ ] Tours page loads: `http://localhost:3000/tours`
- [ ] Login/Register pages work
- [ ] API calls to backend successful

## Post-Deployment Tests (Production)

### Backend Service Tests
Replace `YOUR_BACKEND_URL` with actual Render backend URL:

```bash
# Health check
curl https://YOUR_BACKEND_URL.onrender.com/

# Tours endpoint
curl https://YOUR_BACKEND_URL.onrender.com/api/v1/tours

# Expected response: JSON with tours data
```

### Frontend Tests
Replace `YOUR_FRONTEND_URL` with actual Render frontend URL:

1. **Basic Functionality**
   - [ ] Homepage loads: `https://YOUR_FRONTEND_URL.onrender.com`
   - [ ] Navigation works
   - [ ] Tours page displays tours
   - [ ] Tour details page works
   - [ ] Search functionality

2. **Authentication**
   - [ ] Register new user
   - [ ] Login with credentials
   - [ ] Logout functionality
   - [ ] Protected routes work

3. **Booking System**
   - [ ] Book a tour
   - [ ] View registered tours
   - [ ] User account settings

4. **API Integration**
   - [ ] Frontend successfully calls backend APIs
   - [ ] CORS configured correctly
   - [ ] Error handling works

## Performance Tests

### Backend Performance
- [ ] API response time < 2 seconds
- [ ] Database queries optimized
- [ ] No memory leaks

### Frontend Performance
- [ ] Page load time < 3 seconds
- [ ] Images load properly
- [ ] Responsive design works
- [ ] No console errors

## Security Tests

### Backend Security
- [ ] JWT tokens working
- [ ] Password hashing functional
- [ ] Protected routes secured
- [ ] CORS properly configured

### Frontend Security
- [ ] No sensitive data in client
- [ ] HTTPS enabled
- [ ] XSS protection

## Browser Compatibility
- [ ] Chrome
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mobile browsers

## Common Issues & Solutions

### Backend Issues
1. **Service won't start**
   - Check environment variables
   - Verify MongoDB connection string
   - Check Node.js version compatibility

2. **Database connection fails**
   - Verify MongoDB Atlas IP whitelist
   - Check connection string format
   - Ensure database user permissions

3. **API calls fail**
   - Check CORS configuration
   - Verify API endpoints
   - Check request/response format

### Frontend Issues
1. **Build fails**
   - Check Node.js version
   - Verify all dependencies installed
   - Check for syntax errors

2. **API calls fail**
   - Verify REACT_APP_API_URL
   - Check network requests in browser dev tools
   - Ensure backend is running

3. **Routing issues**
   - Verify _redirects file exists
   - Check React Router configuration

## Monitoring

### After Deployment
- [ ] Set up monitoring for uptime
- [ ] Monitor API response times
- [ ] Check error logs regularly
- [ ] Monitor database performance

### Render Specific
- [ ] Check service logs in Render dashboard
- [ ] Monitor build times
- [ ] Check auto-deploy functionality
- [ ] Verify environment variables set correctly
