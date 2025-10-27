import express from 'express'
import authMiddleware from '../middlewares/auth.js';
import { createBooking, deleteBooking, getBookings, getMyBookings, updateBooking, updatedBookingStatus } from '../controllers/bookingController.js';
import { uploads } from '../middlewares/uploads.js';

const bookingRouter=express.Router();
bookingRouter.post('/',authMiddleware,uploads.single('carImage'),createBooking)
bookingRouter.get('/',getBookings);
bookingRouter.get('/mybooking',authMiddleware,getMyBookings);
bookingRouter.put('/:id',uploads.single('carImage'),updateBooking);
bookingRouter.patch('/:id/status',updatedBookingStatus);
bookingRouter.delete('/:id',deleteBooking);

export default bookingRouter;