var http = getHTTPObject(); // We create the HTTP Object
var xmlDoc; //global xml Response variable to access returned XML Files 



//first, we create a XMLHttpRequest Object...
function getHTTPObject() {
	var xmlhttp;
	// branch for native XMLHttpRequest object
	if (window.XMLHttpRequest){
  		xmlhttp=new XMLHttpRequest()
  	}
	// branch for IE/Windows ActiveX version
	else if (window.ActiveXObject){
  		xmlhttp=new ActiveXObject("Microsoft.XMLHTTP")
  	}else{	
 		return false;
  	}
  	return xmlhttp;
}


//If we got the information, do something with it!
function handleHttpResponse() {
  //alert(http.readyState);
  //first, is my 'object' complete (done getting info from server?)
  if (http.readyState == 4) {
    //if I got something...
          //alert(http.responseText);
    if (http.status==200) {
      // Use the XML DOM to unpack the data 
       xmlDoc = http.responseXML; 
      
      
    }
  }
}

//*********************************************************************
//Add function here for trigger!
      function ajaxCall(){
	   //go make an AJAX call
	  if(http){//if object exists
	    http.open('get','data.xml',true);
		http.onreadystatechange=handleHttpResponse;
	    http.send();
	  }
	  
 }
	  
	   
