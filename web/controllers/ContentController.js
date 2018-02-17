class ContentController{
    constructor() {
        this.contentService = new ContentService();
    }
    
    // DATAController
    getContentByCategoryId(id)  {
        return this.contentService.getContentByCategoryId(id);
    }
    
    //ViewController
    getContentByCategoryIdView(id)  {
        var data = this.getContentByCategoryId(id);
        var result = "";
            var id=data.id;
            var title=data.title;
            var shortDescription=data.shortDescription;
            var fullDescription=data.fullDescription;
            var image=data.image;
            result +=  "<div class='row'>"+
                        "<div class='col-sm-12 col-md-12'>"+
                          "<div class='thumbnail' onclick ='contentClick("+id+")'   >"+
                            "<img src='data:image/png;base64,"+ image +"'/>"+
                            "<div class='caption'>"+
                              "<h3>"+title+"</h3>"+
                              "<p>"+shortDescription+"</p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        
       
        var element =document.getElementById("content");
        element.innerHTML = result;
    }
    
    
    
    
    // DATAController
    getContentById(id)  {
        return this.contentService.getContentById(id);
    }
    
    //ViewController
    getContentByIdView(id)  {
        var data=this.getContentById(id);
        var id=data.id;
        var title=data.title;
        var fullDescription=data.fullDescription;
        var image=data.image;
        var result =  "<div class='row'>"+
                        "<div class='col-sm-12 col-md-12'>"+
                          "<div class='thumbnail' >"+
                            "<img src='data:image/png;base64,"+ image +"'/>"+
                            "<div class='caption'>"+
                              "<h3>"+title+"</h3>"+
                              "<p>"+fullDescription+"</p>"+
                            "</div>"+
                          "</div>"+
                        "</div>"+
                      "</div>";
        var element =document.getElementById("content");
        element.innerHTML = result;
    }
}
