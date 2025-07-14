# Database Setup for Travel Booking App

## MongoDB Atlas Configuration

Dự án này đã được cấu hình để sử dụng MongoDB Atlas. Thông tin kết nối database đã có trong file `.env` của backend.

### Current Database Configuration:
- **Database Provider**: MongoDB Atlas
- **Database Name**: tours_booking
- **Connection String**: Đã được cấu hình trong `tour-management/backend/.env`

### Environment Variables cần thiết:
```
MONGO_URI=mongodb+srv://username:password@cluster0.7xktj.mongodb.net/tours_booking?retryWrites=true&w=majority&appName=Cluster0
```

### Để deploy lên Render:

1. **Option 1: Sử dụng MongoDB Atlas hiện tại**
   - Database đã được setup và hoạt động
   - Chỉ cần đảm bảo IP whitelist cho Render (0.0.0.0/0 cho tất cả IP)

2. **Option 2: Sử dụng Render PostgreSQL (nếu muốn chuyển đổi)**
   - Cần migration từ MongoDB sang PostgreSQL
   - Thay đổi models và queries

### Recommended: Tiếp tục sử dụng MongoDB Atlas

Vì dự án đã được thiết kế cho MongoDB và có data models phù hợp, khuyến nghị tiếp tục sử dụng MongoDB Atlas.

### Security Notes:
- Đảm bảo MongoDB Atlas cluster cho phép kết nối từ Render
- Trong MongoDB Atlas Dashboard:
  1. Vào Network Access
  2. Add IP Address: 0.0.0.0/0 (Allow access from anywhere)
  3. Hoặc add specific Render IP ranges nếu có

### Database Collections:
- users
- tours  
- bookings
- reviews

Tất cả collections sẽ được tự động tạo khi ứng dụng chạy lần đầu.
