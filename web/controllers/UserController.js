class UserController
{
    constructor()
    {
        this.userService = new UserService();
    }
    
    // DATAController
    getAllUser()
    {
        return this.userService.getAllUser();
    }
    
    //ViewController
    
    getUserById(id)
    {
        return this.userService.getUserById(id);
    }
    
    //ViewController
   
    deleteUserById(id)
    {
        return this.userService.deleteUserById(id);
    }
    deleteUserByIdView(id){
        this.deleteUserById(id);
    }

    insertUser(json)
    {
       return this.userService.insertUser(json);    
    }
}