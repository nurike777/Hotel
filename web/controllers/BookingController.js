class BookingController
{
    constructor()
    {
        this.bookingService = new bookingService();
    }
    
    // DATAController
    getAllBooking()
    {
        return this.bookingService.getAllBooking();
    }
    
    //ViewController
    
    getBookingById(id)
    {
        return this.bookingService.getBookingById(id);
    }
    
    //ViewController
   
    deleteBookingById(id)
    {
        return this.bookingService.deleteBookingById(id);
    }
    deleteBookingByIdView(id){
        this.deleteBookingById(id);
    }
    
    insertBooking

    insertBooking(json)
    {
       return this.bookingService.insertBooking(json);    
    }
}