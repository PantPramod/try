document.getElementById('startbutton').style.display="none";
setTimeout(()=>{
    var animation=document.getElementById('mathgameanimation');
    animation.parentNode.removeChild(animation);
    document.getElementById('startbutton').style.display="block";
    
},5000)
document.getElementById('dd').style.display="none";



 function start(){

    document.getElementById('answer').focus();

    document.getElementById('dd').style.display="block";
   //countdown timing
   var timing=document.getElementById('timing') 
   var count=10;
  t= setInterval(()=>{timing.textContent=count;
                 count=count-1;
                 if(count==-1){
                    clearInterval(t);
                    document.getElementById('start').innerHTML="Game Over. Refresh page to start again"
                }

},1000);


 

    document.getElementById('startbutton').style.display="none";
    console.log("Game starts");
     a=Math.floor((Math.random())*20+1);
     b=Math.floor((Math.random())*10+1);
     c= a*b;
    threerandom=Math.floor((Math.random())*3+1);
   
    console.log(threerandom);
    if(threerandom==1){
        document.getElementById('a').textContent="?";
        document.getElementById('b').textContent=b;
        document.getElementById('c').textContent=c;
    }
    if(threerandom==2){
        document.getElementById('a').textContent=a;
        document.getElementById('b').textContent="?";
        document.getElementById('c').textContent=c;
    }
    if(threerandom==3){
        document.getElementById('a').textContent=a;
        document.getElementById('b').textContent=b;
        document.getElementById('c').textContent="?";
    }
 }

function submit(){
    document.getElementById('answer').focus();

  var answer=document.getElementById('answer').value;
  if(threerandom==1){
      if(answer==a){
          console.log("Right");
          document.getElementById('answer').value=""
          clearInterval(t);
          start();
          
      }
  }
  if(threerandom==2){
    if(answer==b){
        console.log("Right");
        document.getElementById('answer').value=""
        clearInterval(t);
        start();
    }
}
if(threerandom==3){
    if(answer==c){
        console.log("Right");
        document.getElementById('answer').value=""
        clearInterval(t);
        start();
    }
}         
}

var answer=document.getElementById('answer');
answer.addEventListener("keyup",function(event){
    if(event.keyCode===13){
        submit();
    }
});