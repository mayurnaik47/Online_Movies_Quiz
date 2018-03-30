// Function to generate Form node after all the user selections

function generateContactForm(di){
    
    
     var div1= createEle('div','id','Selection1',"You Won the Movie Disk!!");
     div1.appendChild(document.createTextNode("You Won the Movie Disk!!"));
    
     var div2= createEle('div','id','Selection2');
     div2.appendChild(document.createTextNode("Your Details Please.."));
    
     di.appendChild(div1);
     di.appendChild(div2);
    
     var frm = createEle('form','id','result1');
     
     var div3 = createEle('div','class','flex');
         
     var div4 = createEle('div','class','label');
     div4.appendChild(document.createTextNode('Name :'));
         
     var div5 = createEle('div','class','ans2');
     var input1 = createEle('input','type','text');
     input1.setAttribute('size','20');
     input1.setAttribute('name','dat');
    
    if(window.localStorage)
    {
        
     if(localStorage.getItem('name')){                             // Check if local storage exists
     input1.setAttribute('value',localStorage.getItem('name'));}    
     
    }
    else if(navigator.cookieEnabled){                         // Check is cookie is enabled 
      if(GetCookie('name')!==null){
          input1.setAttribute('value',GetCookie('name'));
        }
      }
     div5.appendChild(input1);
     div3.appendChild(div4);
     div3.appendChild(div5);
     frm.appendChild(div3); 
    
     var div3 = createEle('div','class','flex');
         
     var div4 = createEle('div','class','label');
     div4.appendChild(document.createTextNode('Email ID :'));
         
     var div5 = createEle('div','class','ans2');
     var input1 = createEle('input','type','text');
     input1.setAttribute('size','20');
     input1.setAttribute('name','dat1');
     
   if(window.localStorage)
    {
        
     if(localStorage.getItem('email')){                             // Check if local storage exists
     input1.setAttribute('value',localStorage.getItem('email'));}    
     
    }
    else if(navigator.cookieEnabled){                             // Check is cookie is enabled 
      if(GetCookie('email')!==null){
          input1.setAttribute('value',GetCookie('email'));
        }
      }
    
    div5.appendChild(input1);
        
     div3.appendChild(div4);
     div3.appendChild(div5);
     frm.appendChild(div3);
    
     var div3 = createEle('div','class','flex');
         
     var div4 = createEle('div','class','labelS');
     div4.appendChild(document.createTextNode('Save Info :'));
    
     var div5 = createEle('div','class','ans3');
     var input1 = createEle('input','type','radio');
     input1.setAttribute('name','info');
     input1.setAttribute('value','yes');
     div5.appendChild(input1);
     div5.appendChild(document.createTextNode('Yes'));
    
     var div6 = createEle('div','class','ans3');
     var input2 = createEle('input','type','radio');
     input2.setAttribute('name','info');
     input2.setAttribute('value','no');
     div6.appendChild(input2);
     div6.appendChild(document.createTextNode('No'));
    
     div3.appendChild(div4);
     div3.appendChild(div5);
     div3.appendChild(div6);
     frm.appendChild(div3);
    
     var div3 = createEle('div','class','flex');
     
     var div5 = createEle('div','class','submit');
     var input1 = createEle('input','type','button');
     input1.onclick = function(){checkSave(di);}
     input1.setAttribute('value','Submit');
     input1.setAttribute('name','dat2');
     div5.appendChild(input1);
     
     var div10 = createEle('div','class','reset');
     var input2 = createEle('input','type','button');
     input2.setAttribute('value','Reset');
     input2.setAttribute('name','dat3');
     input2.onclick = function(){ Reset(document.getElementById('result1')); }
     div10.appendChild(input2);
     
     div3.appendChild(div5);
     div3.appendChild(div10);
     frm.appendChild(div3);
    
    di.appendChild(frm);
}
    
//Function To retrive information entered by user
function checkSave(di){
    var flag2 = 'false';   //flag for validation check
     // Check if "Yes" is selected by User
    
    for(i=0,len=document.getElementsByTagName('input').length;i<len;i++){
        
     if(document.getElementsByTagName('input')[i].name=='info')
      {
        if(document.getElementsByTagName('input')[i].checked==true){
            
            if (document.getElementsByTagName('input')[i].value=='yes'){
                localStore('true');  // Store the user input
            }else{
                localStore('false');  // clear the localStore
            }
        }
      }
        
    }
    
    // Perform Validation if user has entered anything in text boxes
   var inf = document.getElementById('result1').elements[0].value;
   var inf1 = document.getElementById('result1').elements[1].value;
    
    if(inf=='' || inf1=='')
    {
       alert('Please fill all the information in form before submitting it !!');
        flag2 = true;
    }
    
    if(flag2==='false')
    {   
        //remove image
        document.getElementById('container').removeChild(document.getElementById('image'));
        
   // Display for successfully sumission
    
     var div15= createEle('div','id','Selection1');
     div15.appendChild(document.createTextNode("Thank You!!"));
    
     var div16= createEle('div','id','Selection1');
     div16.appendChild(document.createTextNode("Successfully Submitted!!"));
     div16.style.marginBottom = '10px';
    
     var div17= createEle('div','id','result');
     div17.appendChild(div15);
     div17.appendChild(div16);
    
     // Ask user to play again
     var div18= createEle('input','id','play');
     div18.setAttribute('type','button');
     div18.setAttribute('value','Play Again');
     div18.onclick = function(){ initialSel(); }
     div17.appendChild(div18); 
    
    
     document.getElementById('container').replaceChild(div17,di);
     
    //delete remaining select boxes
     for(i=0,len=document.getElementsByTagName('form').length;i<len;i++)
         {
          
          document.getElementById('container').removeChild(document.getElementsByTagName('form')[0]);
         }
    
    
    }
}

// Function to reset form elements
function Reset(input){
    
   input.elements[0].value = '';
   input.elements[1].value = '';
    
}
    