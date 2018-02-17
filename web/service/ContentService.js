class ContentService
{
    getContentByCategoryId(id)  
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/Project/GetContentById?id=' + id, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var content= JSON.parse(request.responseText );
             return content;
         }
         return null;
    }
    
    getContentById(id) 
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/Project/GetContentById?id=' + id, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var content= JSON.parse(request.responseText );
             return content;
         }
         return null;
    }
}