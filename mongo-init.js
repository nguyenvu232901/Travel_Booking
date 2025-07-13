// MongoDB initialization script
db = db.getSiblingDB('travel_booking');

// Create collections
db.createCollection('users');
db.createCollection('tours');
db.createCollection('bookings');
db.createCollection('reviews');

// Create indexes for better performance
db.users.createIndex({ "email": 1 }, { unique: true });
db.users.createIndex({ "username": 1 }, { unique: true });
db.tours.createIndex({ "title": 1 }, { unique: true });
db.tours.createIndex({ "city": 1 });
db.tours.createIndex({ "featured": 1 });
db.bookings.createIndex({ "userId": 1 });
db.bookings.createIndex({ "tourId": 1 });
db.reviews.createIndex({ "productId": 1 });

print('Database initialized successfully!');
