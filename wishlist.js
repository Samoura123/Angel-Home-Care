console.log("js");

var services = [];
//set the click for each button;
window.onload = function setup() {
    console.log ("setup");
    var  buttons= document.querySelectorAll(".but");
    for(var i=0; i<buttons.length; i++ ){
        buttons[i].onclick= function(e) {
            additem(e);
        };
    }

};

   
function additem(e) { 
     //add only an item to the wish list one time;
        var serviceId = e.target.getAttribute("id");
        console.log(services);
        if (!services.includes(serviceId)) {
        console.log(serviceId);
        var service= document.getElementById("item"+ serviceId);
        var aside= document.getElementById("sidebar");
        var article=document.createElement("article");
        article.innerHTML=service.innerHTML;
        services.push(serviceId); 
      //add remove button;
        var button= document.createElement("input");
        button.setAttribute("type","button");
        button.setAttribute("value","Remove"); 
        button.onclick= function(e) {      
            e.target.parentNode.remove();
            for(var i=0;i<services.length;i++){
                if  (services[i]==serviceId)
                services.splice(i,1);
            }
        };
        article.appendChild(button);
        aside.appendChild(article);
  }
   
}




