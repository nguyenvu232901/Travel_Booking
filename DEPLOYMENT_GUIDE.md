# Travel Booking App - Deployment Guide for Render

## Prerequisites
1. GitHub repository với code đã push
2. Render account (free tier available)
3. MongoDB Atlas database đã setup

## Step 1: Deploy Backend Service

### 1.1 Tạo Web Service trên Render
1. Đăng nhập vào [Render Dashboard](https://dashboard.render.com)
2. Click "New +" → "Web Service"
3. Connect GitHub repository: `nguyenvu232901/Travel_Booking`
4. Cấu hình service:

**Basic Settings:**
- **Name**: `travel-booking-backend`
- **Environment**: `Node`
- **Region**: `Oregon (US West)` hoặc gần nhất
- **Branch**: `main` hoặc `deploy`

**Build & Deploy:**
- **Root Directory**: `tour-management/backend`
- **Build Command**: `npm install`
- **Start Command**: `npm start`

**Advanced Settings:**
- **Auto-Deploy**: `Yes`
- **Health Check Path**: `/` (optional)

### 1.2 Environment Variables
Thêm các environment variables sau:

```
NODE_ENV=production
PORT=4000
MONGO_URI=mongodb+srv://nguyentuanvu2002hn:fgHqc7UOJPQndsui@cluster0.7xktj.mongodb.net/tours_booking?retryWrites=true&w=majority&appName=Cluster0
JWT_SECRET_KEY=gahg48589a45ajfjAUFAHHFIhufuu
```

### 1.3 Deploy
1. Click "Create Web Service"
2. Render sẽ tự động build và deploy
3. Chờ deployment hoàn thành (5-10 phút)
4. Lưu lại URL của backend service (ví dụ: `https://travel-booking-backend.onrender.com`)

## Step 2: Deploy Frontend Static Site

### 2.1 Tạo Static Site trên Render
1. Trong Render Dashboard, click "New +" → "Static Site"
2. Connect cùng GitHub repository
3. Cấu hình static site:

**Basic Settings:**
- **Name**: `travel-booking-frontend`
- **Branch**: `main` hoặc `deploy`

**Build & Deploy:**
- **Root Directory**: `tour-management/frontend`
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `build`

### 2.2 Environment Variables cho Frontend
```
REACT_APP_API_URL=https://travel-booking-backend.onrender.com
```
(Thay thế URL bằng URL thực tế của backend service)

### 2.3 Deploy Frontend
1. Click "Create Static Site"
2. Render sẽ build và deploy frontend
3. Lưu lại URL của frontend (ví dụ: `https://travel-booking-frontend.onrender.com`)

**Note**: File `_redirects` đã được tạo trong `public/` folder để handle React Router routing trên static hosting.

## Step 3: Verification

### 3.1 Test Backend API
Kiểm tra các endpoints:
- `GET https://your-backend-url.onrender.com/api/v1/tours`
- `GET https://your-backend-url.onrender.com/api/v1/users`

### 3.2 Test Frontend
1. Truy cập frontend URL
2. Kiểm tra:
   - Trang chủ load được
   - Danh sách tours hiển thị
   - Chức năng đăng ký/đăng nhập
   - Booking tours

## Troubleshooting

### Common Issues:
1. **Build fails**: Kiểm tra Node.js version compatibility
2. **API calls fail**: Kiểm tra CORS settings và API URL
3. **Database connection fails**: Kiểm tra MongoDB Atlas IP whitelist

### Logs:
- Backend logs: Render Dashboard → Service → Logs
- Frontend build logs: Render Dashboard → Static Site → Deploys

## Notes:
- Free tier có giới hạn: services sẽ sleep sau 15 phút không hoạt động
- First request sau khi sleep có thể mất 30-60 giây để wake up
- Để production, nên upgrade lên paid plan
