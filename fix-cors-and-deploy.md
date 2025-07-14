# Fix CORS và URL Issues

## Vấn đề đã được sửa:

### 1. CORS Configuration (Backend)
✅ Đã cập nhật `tour-management/backend/index.js`:
- Thêm frontend domain vào CORS whitelist
- Cấu hình methods và headers đúng

### 2. URL Formation (Frontend)  
✅ Đã sửa `tour-management/frontend/src/utils/config.js`:
- Xử lý trailing slash
- Đảm bảo URL formation đúng

## Bước tiếp theo:

### 1. Push code mới:
```bash
git add .
git commit -m "Fix CORS and URL formation issues"
git push origin main
```

### 2. Redeploy Backend trên Render:
- Vào Render Dashboard → Backend Service
- Click "Manual Deploy" → "Deploy latest commit"
- Chờ deployment hoàn thành

### 3. Kiểm tra Environment Variables (Frontend):
- Vào Render Dashboard → Frontend Service → Environment
- Đảm bảo: `REACT_APP_API_URL=https://travel-booking-backend-553i.onrender.com`
- **KHÔNG có trailing slash!**

### 4. Redeploy Frontend:
- Click "Manual Deploy" → "Deploy latest commit"

### 5. Test API:
```bash
# Test backend trực tiếp
curl https://travel-booking-backend-553i.onrender.com/api/v1/tours/search/getFeaturedTours

# Hoặc dùng script
node test-api.js https://travel-booking-backend-553i.onrender.com
```

## Kiểm tra trong Browser:

1. **Mở Developer Tools** (F12)
2. **Network tab**
3. **Reload trang**
4. **Kiểm tra API calls**:
   - URL phải là: `https://travel-booking-backend-553i.onrender.com/api/v1/tours/search/getFeaturedTours`
   - KHÔNG có double slash
   - Response status phải là 200

## Nếu vẫn có lỗi:

### Backend Logs:
- Render Dashboard → Backend Service → Logs
- Tìm CORS errors hoặc connection issues

### Frontend Console:
- F12 → Console tab
- Tìm network errors hoặc CORS messages

### Common Fixes:
1. **Đảm bảo backend đang chạy** (không sleep)
2. **Kiểm tra MongoDB connection**
3. **Verify environment variables**

## Expected Result:
Sau khi fix, trang chủ sẽ load được danh sách tours từ database.
