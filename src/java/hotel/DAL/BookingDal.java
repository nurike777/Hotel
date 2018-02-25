/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package hotel.DAL;

import java.util.List;
import hotel.model.Booking;
import org.apache.ibatis.session.SqlSession;

/**
 *
 * @author nurzh
 */
public class BookingDal extends BaseDal {
    
    public BookingDal() {
        super();
    }
    
    public List<Booking> selectAll()
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         List<Booking> list = session.selectList("booking.selectAll");
         session.close();
         return list;
    }
    
    public Booking selectById(int id)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         Booking booking= session.selectOne("booking.selectById",id);
         session.close();
         return booking;
    }
    
    public int update(Booking booking)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.update("booking.update",booking);
         session.commit();
         session.close();
         return count;
    }
    
    public int insert(Booking booking)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.insert("booking.insert",booking);
         session.commit();
         session.close();
         return count;
    }
     
    public int delete(int id)
    {
         SqlSession session = sqlSessionFactory.openSession(); 
         int count= session.delete("booking.deleteById",id);
         session.commit();
         session.close();
         return count;
    }
    
}
