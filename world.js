window.onload= function()
{
    searchrequest();
}
function searchrequest(str)
{
    
    if(str=="") {
            document.getElementById("lookup").onclick = "";
            return;
    }else{
       
        var httpRequest = new XMLHttpRequest();
    

        const data = "country=" + document.getElementById("country").value+"&context=";
         httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status ==200) {
            {
                    var response = httpRequest.responseText;
                    
                    document.getElementById("result").innerHTML= this.responseText;}
                    
                    
                 }; 
            
        };

        httpRequest.open("GET", "getworld.php? q="+url+data,true);
        httpRequest.send();
    }


    }

    
    
    document.getElementById("city").onclick= function()
    {
        var httpRequest = new XMLHttpRequest();
        var url = "world.php?";
        
        
        const data = "country=" + document.getElementById("country").value+"&context=cities";
         httpRequest.onreadystatechange = function()
        {
            if (httpRequest.readyState === XMLHttpRequest.DONE && httpRequest.status === 200) 
            {
                
                
                    var response = httpRequest.responseText;
                    
                    document.getElementById("result").innerHTML= this.responseText;
                    
                    
                 } 
            };

        httpRequest.open("GET", "getworld.php? q="+url+data,true);
        httpRequest.send();

    }