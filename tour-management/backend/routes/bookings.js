
import express from 'express';
import { verifyAdmin, verifyUser } from '../utils/verifyToken.js';
import { createBooking, getAllBooking, getBooking, getBookingsByUser } from '../controllers/bookingController.js';


const router = express.Router();

router.post("/", verifyUser, createBooking);
router.get("/:id", verifyUser, getBooking);
router.get("/", verifyAdmin, getAllBooking);
router.get("/user/:id", verifyUser, getBookingsByUser)

export default router;