//localStorage

function localStore(status)
{
		    // does localStorage exists for this browser?
if(window.localStorage)
{
 if(status==='true')  // user selected "Yes"
     {
      var input = document.getElementById('result1');
      localStorage.setItem('name',input.elements[0].value);
      localStorage.setItem('email',input.elements[1].value);
 
  }else {
      // user selected "No"
      //Clear Local storage
      localStorage.removeItem('name');
      localStorage.removeItem('email');
    }
    
}
else   // Check is cookie is enabled and retrieved
{ 
     
    document.cookie = "cookie_test";
    (document.cookie.indexOf("cookie_test")!=-1)?cookieEnabled=true:cookieEnabled=false;
    
    if(cookieEnabled){  // code to store form input values
       
       if(status==='true') {   
        SetCookie('name',input.elements[0].value);
        SetCookie('email',input.elements[1].value);
       } 
        else{
             // user selected "No"
            //Clear Local storage 
            DeleteCookie('name');
            DeleteCookie('email');
        }
    }else {
        
        alert ('Cookie not enabled for the browser !!!');
    }
    
    
 }
}

