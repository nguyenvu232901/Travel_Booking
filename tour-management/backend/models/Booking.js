import mongoose from "mongoose";

const bookingSchema = new mongoose.Schema(
  {
    userId: { type: String },
    userEmail: { type: String },
    tourId: {  // Changed from tourName to tourId to refer to the Tour document
      type: mongoose.Types.ObjectId,
      ref: "Tour",
      required: true
    },
    tourName: { type: String, required: true },
    fullName: { type: String, required: true },
    phone: { type: Number, required: true },
    guestSize: { type: Number, required: true },
    bookAt: { type: Date, required: true },
    totalAmount: { type: Number, required: true },
    photo: { type: String },  // New field for the image
    desc: { type: String },       // New field for the description
  },
  { timestamps: true }
);


export default mongoose.model("Booking", bookingSchema);
