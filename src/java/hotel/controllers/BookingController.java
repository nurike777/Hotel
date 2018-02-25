/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hotel.controllers;

import java.util.List;
import hotel.DAL.BookingDal;
import hotel.model.Booking;

/**
 *
 * @author nurzh
 */
public class BookingController {
    protected BookingDal bookingDal;
    public BookingController() 
    {
        bookingDal = new BookingDal();
    }
    
    public List<Booking> getAllBooking()
    {
        return bookingDal.selectAll();
    }
    
    public Booking getBooking(int id)
    {
        return bookingDal.selectById(id);
    }
     
    public int insertBooking(Booking booking)
    {
        return bookingDal.insert(booking);
    }
      
    public int updateBooking(Booking booking)
    {
        return bookingDal.update(booking);
    }
    
    public int deleteBookingById(int id)
    {
        return bookingDal.delete(id);
    }
    
}
