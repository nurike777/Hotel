/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hotel.mappers;

import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import hotel.model.Booking;
import org.codehaus.jackson.map.ObjectMapper;

/**
 *
 * @author nurzh
 */
public class JsonBookingMapper {
    public static String toJSON(Booking booking)
    {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json = mapper.writeValueAsString(booking);
            return json;
        } catch (IOException ex) {
            Logger.getLogger(JsonBookingMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
     public static String toJSON(List<Booking> booking)  {
        try {
            ObjectMapper mapper = new ObjectMapper();
            String json = mapper.writeValueAsString(booking);
            return json;
        } catch (IOException ex) {
            Logger.getLogger(JsonBookingMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
    
    
    public static Booking fromJSON(String json)  {
        try {
            ObjectMapper mapper = new ObjectMapper();
            Booking booking = mapper.readValue(json, Booking.class);
            return booking;
        } catch (IOException ex) {
            Logger.getLogger(JsonBookingMapper.class.getName()).log(Level.SEVERE, null, ex);
        }
        return null;
    }
}
