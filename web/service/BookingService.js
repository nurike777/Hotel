class BookingService
{
    getAllBooking()
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/Project/GetAllBooking',false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
            var bookingList = JSON.parse(request.responseText );
            return bookingList;
         }
         return null;
    }
    
    
     insertBooking(json)
    {
        var request = new XMLHttpRequest();
        request.open('GET', '/Project/InsertBookingByContent?json='+json, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var json= JSON.parse(request.responseText );
             return json;
         }
         return null;
    }
}