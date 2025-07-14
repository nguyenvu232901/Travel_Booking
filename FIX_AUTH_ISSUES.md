# Fix Authentication Issues - 401 Unauthorized

## Vấn đề đã được sửa:

### 1. Backend Token Verification ✅
- **File**: `tour-management/backend/utils/verifyToken.js`
- **Sửa**: Hỗ trợ cả cookie và Authorization header
- **Trước**: Chỉ đọc token từ cookies
- **Sau**: Đọc từ cookies hoặc Authorization header

### 2. Cookie Settings ✅
- **File**: `tour-management/backend/controllers/authController.js`
- **Sửa**: Cấu hình cookie cho cross-domain
- **Thêm**: secure, sameSite settings cho production

### 3. Frontend Token Storage ✅
- **File**: `tour-management/frontend/src/pages/Login.jsx`
- **Sửa**: Lưu token vào localStorage sau khi login
- **Thêm**: Error handling tốt hơn

### 4. API Request Headers ✅
- **File**: `tour-management/frontend/src/hooks/useFetch.js`
- **Sửa**: Gửi Authorization header với token
- **Cải thiện**: Header preparation logic

### 5. Logout Functionality ✅
- **File**: `tour-management/frontend/src/components/Header/Header.jsx`
- **Sửa**: Clear token khi logout

## Bước tiếp theo:

### 1. Deploy Changes:
```bash
git add .
git commit -m "Fix authentication issues - support both cookie and Bearer token"
git push origin main
```

### 2. Redeploy trên Render:
- Backend: Manual Deploy → Deploy latest commit
- Frontend: Manual Deploy → Deploy latest commit

### 3. Test Authentication:
```bash
# Test auth flow
node test-auth.js https://travel-booking-backend-553i.onrender.com

# Test API endpoints
node test-api.js https://travel-booking-backend-553i.onrender.com
```

## Cách test trên Frontend:

### 1. Login Process:
1. Vào trang Login
2. Đăng nhập với credentials
3. Kiểm tra Developer Tools → Application → Local Storage
4. Phải thấy `token` được lưu

### 2. API Calls:
1. F12 → Network tab
2. Thực hiện action cần authentication (như review, booking)
3. Kiểm tra request headers có `Authorization: Bearer [token]`

### 3. Protected Routes:
- Review creation: `POST /api/v1/review/:tourId`
- Booking creation: `POST /api/v1/booking`
- User profile: `GET /api/v1/users/:id`

## Troubleshooting:

### Nếu vẫn 401:
1. **Kiểm tra token trong localStorage**:
   ```javascript
   console.log(localStorage.getItem('token'));
   ```

2. **Kiểm tra request headers**:
   - F12 → Network → Click request → Headers
   - Phải có: `Authorization: Bearer [token]`

3. **Kiểm tra backend logs**:
   - Render Dashboard → Backend Service → Logs
   - Tìm authentication errors

### Common Issues:
- **Token expired**: Login lại
- **Token malformed**: Clear localStorage và login lại
- **CORS issues**: Kiểm tra CORS settings trong backend
- **Environment variables**: Kiểm tra JWT_SECRET_KEY

## Expected Flow:
1. User login → Receive token → Store in localStorage
2. API calls → Include Authorization header → Backend verifies token
3. Success → Return data
4. Logout → Clear token from localStorage

## Test Commands:
```bash
# Test specific endpoints that were failing
curl -H "Authorization: Bearer YOUR_TOKEN" \
  https://travel-booking-backend-553i.onrender.com/api/v1/review/66cdabf9f72b0e04565eeb6e

# Test without token (should get 401)
curl https://travel-booking-backend-553i.onrender.com/api/v1/review/66cdabf9f72b0e04565eeb6e
```
