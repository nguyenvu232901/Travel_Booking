# Travel Booking App - Deployment Ready

## 🚀 Quick Deploy to Render

Dự án này đã được chuẩn bị sẵn sàng để deploy lên Render.com với cấu hình tự động.

### 📁 Files đã được tạo:
- `render.yaml` - Cấu hình tự động deploy cho Render
- `DEPLOYMENT_GUIDE.md` - Hướng dẫn chi tiết deploy
- `DATABASE_SETUP.md` - Cấu hình database
- `TESTING_CHECKLIST.md` - Checklist kiểm tra sau deploy
- `test-api.js` - Script test API endpoints

### 🔧 Cấu hình đã hoàn thành:

#### Backend (tour-management/backend):
- ✅ Port configuration cho Render
- ✅ Health check endpoint
- ✅ Environment variables setup
- ✅ MongoDB Atlas connection
- ✅ CORS configuration

#### Frontend (tour-management/frontend):
- ✅ Environment-based API URL
- ✅ Production build configuration
- ✅ Static routing setup (_redirects)
- ✅ Environment variables

### 🚀 Deploy Steps:

1. **Push code to GitHub** (nếu chưa):
   ```bash
   git add .
   git commit -m "Ready for Render deployment"
   git push origin main
   ```

2. **Deploy Backend**:
   - Vào [Render Dashboard](https://dashboard.render.com)
   - New → Web Service
   - Connect repository: `nguyenvu232901/Travel_Booking`
   - Root Directory: `tour-management/backend`
   - Build Command: `npm install`
   - Start Command: `npm start`
   - Add environment variables từ `tour-management/backend/.env`

3. **Deploy Frontend**:
   - New → Static Site
   - Connect cùng repository
   - Root Directory: `tour-management/frontend`
   - Build Command: `npm install && npm run build`
   - Publish Directory: `build`
   - Add environment variable: `REACT_APP_API_URL=https://your-backend-url.onrender.com`

### 🧪 Testing:

Sau khi deploy, chạy test script:
```bash
node test-api.js https://your-backend-url.onrender.com
```

### 📋 Checklist:
- [ ] Backend service deployed và running
- [ ] Frontend static site deployed
- [ ] Database connection working
- [ ] API endpoints responding
- [ ] Frontend connecting to backend
- [ ] Authentication working
- [ ] Booking functionality working

### 🔗 Expected URLs:
- Backend API: `https://travel-booking-backend.onrender.com`
- Frontend App: `https://travel-booking-frontend.onrender.com`

### 📝 Notes:
- Free tier services sleep after 15 minutes of inactivity
- First request after sleep may take 30-60 seconds
- MongoDB Atlas đã được cấu hình và sẵn sàng sử dụng

### 🆘 Troubleshooting:
Xem chi tiết trong `DEPLOYMENT_GUIDE.md` và `TESTING_CHECKLIST.md`

---

**Dự án đã sẵn sàng deploy! 🎉**
