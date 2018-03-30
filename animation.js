// Function to rotate elements
function rotate (ele,start)
{
               
    if(start<=360)
    {
    ele.style.webkitTransform = 'rotate('+start+'deg)'; 
    ele.style.mozTransform    = 'rotate('+start+'deg)'; 
    ele.style.msTransform     = 'rotate('+start+'deg)'; 
    ele.style.oTransform      = 'rotate('+start+'deg)'; 
    ele.style.transform       = 'rotate('+start+'deg)'; 
    
        
    slide(ele); // call to slide funtion
    setTimeout(function(){rotate(ele,start+2);},2)
    }
}
    
//Function to slide elements
function slide(ele){
    
    if(parseInt(ele.style.left)<=0)
    {
     ele.style.left = parseInt(ele.style.left)+1+'px';
     setTimeout(function(){slide(ele);},2)
    
    }
}
    
//Function to rotate images
function rotateImg(ele,start){
    
    
    ele.style.webkitTransform = 'rotate('+start+'deg)'; 
    ele.style.mozTransform    = 'rotate('+start+'deg)'; 
    ele.style.msTransform     = 'rotate('+start+'deg)'; 
    ele.style.oTransform      = 'rotate('+start+'deg)'; 
    ele.style.transform       = 'rotate('+start+'deg)'; 
       
    setTimeout(function(){rotateImg(ele,start+2);},50);
    
}

document.getElementById('ask').style.fontWeight = 'bold';
document.getElementById('ask').style.fontSize = '21px';


//function to change color of heading
function colorChange(index){
    
    var color = ['red', 'green', 'blue', 'yellow', 'pink', 'purple'];
    
    if(index==(color.length-1)){
        index = 0;
    }
    document.getElementById('ask').style.color = color[index];
    
     setTimeout(function(){colorChange(index+1);},1000);
    
    
}