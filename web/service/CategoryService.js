class CategoryService
{
    getAllCategory()
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/Project/GetAllCategory', false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var categoryList= JSON.parse(request.responseText );
             return categoryList;
         }
         return null;
    }
   
    getCategoryById(id)
    {
         var request = new XMLHttpRequest();
         request.open('GET', '/Project/GetCategoryById?id=' + id, false);
         request.send();
         if (request.status != 200)  {
              alert( request.status + ': ' + request.statusText ); 
         } 
         else    {
             var category= JSON.parse(request.responseText );
             return category;
         }
         return null;
    }
}