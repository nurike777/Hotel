class UserService
{
    getAllUser()
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/Project/GetAllUser',false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
            var userList = JSON.parse(request.responseText );
            return userList;
         }
         return null;
    }
    
    
     insertUser(json)
    {
        var request = new XMLHttpRequest();
        request.open('GET', '/Project/InsertUser?json='+json, false);
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
    
    
    getUserById(id)
    {
        var request = new XMLHttpRequest();
        request.open('GET', '/Project/GetUserById?id=' + id, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var user= JSON.parse(request.responseText );
             return user;
         }
         return null;
    }
    
}