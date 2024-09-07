
import Booking from "../models/Booking.js";


//create new booking
export const createBooking = async (req, res) => {
    const newBooking = new Booking({
      ...req.body,
      photo: req.body.photo,
      desc: req.body.desc,
    });
    try {
      const savedBooking = await newBooking.save();
      res.status(200).json({
        success: true,
        message: "Your tour is booked",
        data: savedBooking,
      });
    } catch (err) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
      });
    }
  };
  


//get single booking
export const getBooking = async(req,res)=>{
    const id = req.params.id
    try {
        const book = await Booking.findById(id);
        res.status(200).json({
            success:true, 
            message:"successful", 
            data:book
        });
    } catch (err) {
        res.status(404).json({
            success:false, 
            message:"Not found", 
            });
    }
};


//get all booking
export const getAllBooking = async(req,res)=>{
    try {
        const books = await Booking.findById();
        res.status(200).json({
            success:true, 
            message:"successful", 
            data:books
        });
    } catch (err) {
        res.status(500).json({
            success:false, 
            message:"internal server error", 
        });
    }
};


// // Trong controllers/bookingController.js
// export const getBookingsByUser = async (req, res) => {
//     const userId = req.params.id;
//     try {
//         const bookings = await Booking.find({ userId });
//         res.status(200).json({
//             success: true,
//             data: bookings
//         });
//     } catch (err) {
//         res.status(500).json({
//             success: false,
//             message: 'Internal server error'
//         });
//     }
// };

import Tour from "../models/Tour.js";

// Get bookings with tour details
export const getBookingsByUser = async (req, res) => {
  const userId = req.params.id;
  try {
    const bookings = await Booking.find({ userId }).populate({
      path: 'tourId',  // This is the field in Booking that references Tour
      select: 'photo desc title'  // Specify which fields to include from Tour
    });
    res.status(200).json({
      success: true,
      data: bookings
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};
