// Function to dynamically generate quiz question .
function quizNode(obj,quiz,domOpt)
{
    
for(i=0;i<quiz.length;i++)
 {
   
  if(domOpt.title===quiz.item(i).getElementsByTagName('quiz').item(0).firstChild.nodeValue)    // extract data from data structure based on user selection.
  {      
      var k = 0;
      
    // check for quiz question based on user selection
    
    while(!(domOpt.value===quiz.item(i).getElementsByTagName('valuee').item(k).getElementsByTagName('value').item(0).firstChild.nodeValue))
    {
        k++;
        
    }  
    
    var name = quiz.item(i).getElementsByTagName('name').item(0).firstChild.nodeValue;
    var title = quiz.item(i).getElementsByTagName('title').item(0).firstChild.nodeValue;
      
    // Creation of new form node and setting its attribute
    var form = createEle("form","class","quiz");
    form.style.position = 'relative';
    form.style.left = "-240px";
    
    //creation of heading node and appending it to form element
    var head = createEle("h6","class","head3");
    head.appendChild(document.createTextNode(name));
    form.appendChild(head);
    
    var head = createEle("h6","class","head3");
    head.appendChild(document.createTextNode(title));
    form.appendChild(head);
 
    // Creation of Select Form element
    var slct = createEle("select","class","sel");
    slct.setAttribute("name",title);
    slct.onchange = function(){quizCheck(domOpt,this);}
    form.appendChild(slct);
    
      
    // below loop used for creation of Option elements in Select statement  
      
    var flag = true;  // used for creation of option title node in below loop. 
    var val = quiz.item(i).getElementsByTagName('valuee').item(k).getElementsByTagName('value');
      
    for(j=1;j<val.length;j++)
    {
      
      if(flag)
       {
        //Creation of Option elements in Select statement
        var option = createEle("option","value","none");
        option.appendChild(document.createTextNode(title));
        slct.appendChild(option);
        flag = false;
       }
       
        var option1 = createEle("option","value",val.item(j).firstChild.nodeValue);
        option1.appendChild(document.createTextNode(val.item(j).firstChild.nodeValue));
        slct.appendChild(option1);
        //Appending all the option elements at the end of select statements.
        slct.appendChild(option1);
   
     }
      
      
      //Dynamic appending select statement.
      
      document.getElementById('container').appendChild(form);
   
      document.getElementById('container').appendChild(document.createTextNode(''));
       
      rotate(form,0);  // Animation on newly created select menu.
      
      
    }
   }
    
}
// Function to check for correct answer
function quizCheck(domOpt,dom){
   
     //remove child if exists already. When user selects different answers at a time.
      
  if(domOpt.parentNode.parentNode.lastChild.previousSibling.nodeName!=='FORM')
      {
          
          if(document.getElementById('image')!==null)
            {    
                document.getElementById('container').removeChild(document.getElementById('image').nextSibling);
                document.getElementById('container').removeChild(document.getElementById('image'));
            }
          document.getElementById('container').removeChild(document.getElementById('result').nextSibling);
          document.getElementById('container').removeChild(document.getElementById('result'));  
    
       }
    if(dom.value!=='none')
    {    
    
     var di = createEle('div','id','result');
     
     var h1 = createEle('h4','id','head10');
     h1.appendChild(document.createTextNode('Congratulations!!!'));
    
     var h2 = createEle('h5','id','head11');
     h2.appendChild(document.createTextNode('Correct Answer!!'));
    
     var div2 = createEle('div','id','Selection');
     div2.appendChild(document.createTextNode('Your Selections:'));
     
     di.appendChild(h1);
     di.appendChild(h2);
     di.appendChild(div2);
    

        
        
// Find out the selected options from all select menu and store it in array for further reference in assigning value to text box.
        
for(k=0,len=document.getElementsByTagName('form').length-1;k<len;k++)
{
     
      var head = document.getElementsByTagName('h6')[k].id;
              
      
     if(k===(len-1)){
         
       var selec = domOpt.value;  
     }     
     else{
                 
           var selec = document.getElementsByTagName('select')[k+1].name; 
             
     }     
    
     var div3 = createEle('div','class','flex');
         
     var div4 = createEle('div','class','label');
     div4.appendChild(document.createTextNode(head));
         
     var div5 = createEle('div','class','label1');
     div5.appendChild(document.createTextNode(selec));
         
     div3.appendChild(div4);
     div3.appendChild(div5);  
     di.appendChild(div3);
     
         
}  


    // Logic for quiz answer check
    var m=0;
    for(m=0;m<quiz.length;m++)
     {
     
      if(domOpt.title===quiz.item(m).getElementsByTagName('quiz').item(0).firstChild.nodeValue)    // extract data from data structure based on user selection.
      {      
        var k = 0;
      
        // check for quiz question based on user selection
    
        while(!(domOpt.value===quiz.item(m).getElementsByTagName('valuee').item(k).getElementsByTagName('ans').item(0).firstChild.nodeValue))
        {
            k++;
        
        }  
        var corrAns = quiz.item(m).getElementsByTagName('valuee').item(k).getElementsByTagName('ans').item(1).firstChild.nodeValue;
          
          //capture images from xml based on user correct answer
    
          var img = quiz.item(m).getElementsByTagName('valuee').item(k).getElementsByTagName('img').item(0).firstChild.nodeValue;
          
      }
     }
   
    // Replace heading node if answer is wrong
    
    if(corrAns!==dom.value){
        
      var h10 = createEle('h4','id','head10');
     h10.appendChild(document.createTextNode('Oops!! Bad Luck!'));
     di.replaceChild(h10,h1);
        
     var h20 = createEle('h5','id','head15');
     h20.appendChild(document.createTextNode('Wrong Answer!!'));
     di.replaceChild(h20,h2);
        
        if(document.getElementById('image')!==null)
            {
                console.log(document.getElementById('image'));   
                document.getElementById('container').removeChild(document.getElementById('image').nextSibling);
                document.getElementById('container').removeChild(document.getElementById('image'));
            }
    }
    
     var div6 = createEle('div','class','flex');
         
     var div7 = createEle('div','class','label');
     div7.appendChild(document.createTextNode('Quiz Correct Answer:'));
         
     var div8 = createEle('div','class','ans');
     div8.appendChild(document.createTextNode(corrAns));
    
     div6.appendChild(div7);
     div6.appendChild(div8);
    
     var div11 = createEle('div','class','flex');
    
     var div9 = createEle('div','class','label');
     div9.appendChild(document.createTextNode('Your Answer:'));
         
     var div10 = createEle('div','class','ans1');
     div10.appendChild(document.createTextNode(dom.value));
    
     div11.appendChild(div9);
     div11.appendChild(div10);
     di.appendChild(div6);
     di.appendChild(div11);
     
    if(corrAns===dom.value){     // If answer is correct, generate contact form
        
        generateContactForm(di);
        showImage(img);
        div10.setAttribute('class','ans');
        div10.style.fontWeight = 'bold';
    }  
    
     document.getElementById('container').appendChild(di);
     document.getElementById('container').appendChild(document.createTextNode('')); 
    
    }
    
}


//funtion to display the image when user answer is corrrect
function showImage(img)
{
    var im = createEle('img','src',img);
    im.setAttribute('width','280px');
    im.setAttribute('height','280px');
    im.setAttribute('id','image');
    document.getElementById('container').appendChild(im);
    document.getElementById('container').appendChild(document.createTextNode(''));
    
    rotateImg(im,1);
    
}
  
