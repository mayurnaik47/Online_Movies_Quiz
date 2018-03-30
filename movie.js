var browser;

function browserChk()   // To check the browser as well as its version.
                        // Also navigate users to other page (To download latest browser) in case user is having outdated browser
{    
 
if(navigator.userAgent.indexOf("Chrome") != -1 )
    {
        
        browser = 'chrome';

    }
    else if(navigator.userAgent.indexOf("Safari") != -1)
    {
       
        browser = 'safari';
       
    }
    else if(navigator.userAgent.indexOf("Firefox") != -1 ) 
    {
         
         browser = 'firefox';
         
    
    }
    else if((navigator.userAgent.indexOf("MSIE") != -1 || navigator.userAgent.indexOf("rv")!=1)) //IF IE > 10
    { 
        
      if(navigator.appVersion.indexOf("MSIE 7")!=-1)  //IF IE 7, Route to download page for downloading updated browsers
        {
         if(GetCookie('browseChkCnt')==null)  //First time visit of the user on IE 7
        {
            var stat= prompt("Your Browser is IE 7(Outdated). Type (YES) to download latest browsers. Type(NO) to continue viewing on IE 7");
            if(stat==='YES'||stat==='yes'||stat==='Yes')
            {
            window.location.href= "browse.html";
            }
              SetCookie('browseChkCnt',1);  
         }
        }

    }  
    else 
    {
       alert('Unknown browser');
    }
    
    if(browser=='safari')
    {
       
        if(GetCookie('browseSafCnt')==null)  //First time visit of the user on Safari
     {
       var stat= prompt("You are viewing this application on Safari. For better responsive performance use Mozilla,Firefox,Chrome,IE8-IE11. Enter 'YES' to navigate on browser download page. Enter 'NO' to continue on safari browser");
        
        if(stat==='YES'||stat==='yes'||stat==='Yes')
        {
            window.location.href= "browse.html";
            
        }
          SetCookie('browseSafCnt',1);     
     }
    }

}
  
function init()  // to Display starting page [Asking user to start quiz] 
{
    
    
     var div15= createEle('div','id','Selection1');
     div15.appendChild(document.createTextNode("Welcome to Movies quiz"));
     div15.style.fontSize = '20px';
    
     var div16= createEle('div','id','Selection1');
     div16.appendChild(document.createTextNode("Quiz questions are purely based user selections"));
     div16.style.marginBottom = '10px';
    
     var div17= createEle('div','id','result');
     div17.appendChild(div15);
     div17.appendChild(div16);
    
     // Ask user to play again
     var div18= createEle('input','id','play');
     div18.setAttribute('type','button');
     div18.setAttribute('value','Start Quiz');   
    
     div18.onclick = function(){ initialSel(); }
     div17.appendChild(div18); 
     div17.style.top = '40%';
    document.getElementById('container').appendChild(div17);
}

function initialSel()  // Function to display first drop down 
{
  obj = xmlDoc.getElementsByTagName('obj');   //Extract all objects from xml
  var val = new Object();
  val.value = 'Criteria';
  document.getElementById('container').removeChild(document.getElementById('result'));
  newNode(obj,val);  
    
}


// Function to habdle calls to creation of new nodes and deletion of nodes if required 
function goDyna(domOpt){
    
    
   quiz = xmlDoc.getElementsByTagName('quizz'); //Extract all quiz objects from xml
   
   obj = xmlDoc.getElementsByTagName('obj');   //Extract all objects from xml
    
    
    // To check if new node already exists before creation. If not, create it else kill all successor nodes of the selected node.
   if(domOpt.parentNode.nextSibling.nextSibling===null ){
      
       //Below function is used to create new select drop-down menu based on user slection. 
       newNode(obj,domOpt);
      
  }
  else {
      
      killNodes(domOpt);
      if(domOpt.value!=='none'){
      newNode(obj,domOpt);   //After killing successors, create new drop down menu as per current user selection.
      }
  }
    
}

// Function used to generate new drop down node dynamically based on user selection
function newNode(obj,domOpt){
    
// For loop to dynamically create select drop-down menu based on user slection. 
var lNode = true;
for(i=0;i<obj.length;i++)
 {
  
  if(domOpt.value===obj.item(i).getElementsByTagName('name').item(0).firstChild.nodeValue)    // extract data from data structure based on user selection.
  {      
    lNode = false; //data node available to generate next level select statement
    
    // Store title, name value from selected object stored in xml. 
      var title1 = obj.item(i).getElementsByTagName('title1').item(0).firstChild.nodeValue;
      var title = obj.item(i).getElementsByTagName('title').item(0).firstChild.nodeValue;
      var name = obj.item(i).getElementsByTagName('name').item(0).firstChild.nodeValue;
      var value = obj.item(i).getElementsByTagName('value');
      
      
    // Creation of new form node and setting its attribute
    var form = createEle("form","class","movie");
    form.style.position = 'relative';
    form.style.left = "-240px";
    
    //creation of heading node and appending it to form element
    var head = createEle("h6","class","head2");
    head.setAttribute("id",title1);
    head.appendChild(document.createTextNode(title));
    form.appendChild(head);
 
    // Creation of Select Form element
    var slct = createEle("select","class","sel");
    slct.setAttribute("name",name);
    slct.setAttribute("title",title);
    slct.onchange = function(){goDyna(this);}
    form.appendChild(slct);
    
    // below loop used for creation of Option elements in Select statement  
      
    var flag = true;  // used for creation of option title node in below loop. 
    for(j=0;j<obj.item(i).getElementsByTagName('value').length;j++)
    {
      
      if(flag)
       {
        //Creation of Option elements in Select statement
        var option = createEle("option","value","none");
        option.appendChild(document.createTextNode(title));
        slct.appendChild(option);
        flag = false;
       }
       
        var option1 = createEle("option","value",value.item(j).firstChild.nodeValue);
        option1.appendChild(document.createTextNode(value.item(j).firstChild.nodeValue));
        slct.appendChild(option1);
        //Appending all the option elements at the end of select statements.
        slct.appendChild(option1);
   
     } 
      
      //Dynamic appending select statement.
      
      document.getElementById('container').appendChild(form);
   
      document.getElementById('container').appendChild(document.createTextNode(''));
       
      rotate(form,0);  // Animation on newly created select menu.
      
      break;
    }
   }
    
    // If its last node in selection tree, display ouput to user.
    if(lNode===true)
     {
         quizNode(obj,quiz,domOpt);
         
     }    
}
    
 // to kill the successor nodes  
function killNodes(domOpt)
{
   
    while(domOpt.parentNode.nextSibling.nextSibling!==null){

        //delRotate(domOpt.parentNode.nextSibling.nextSibling,0);
        domOpt.parentNode.parentNode.removeChild(domOpt.parentNode.nextSibling.nextSibling);
        domOpt.parentNode.parentNode.removeChild(domOpt.parentNode.nextSibling);
    }  
    
    
}
    
 
function createEle(type,attri,val,app,append)
{
    
    var ele =  document.createElement(type);
    ele.setAttribute(attri,val);
    return ele;
    
}


    
    
    
    
    
    
    
    
    
    
    
    
    
    






