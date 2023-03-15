(function(){
   let screen = document.querySelector('.screen');
   let buttons = document.querySelectorAll('.btn');
   let clear = document.querySelector('.btn-red');
   let equal= document.querySelector('.btn-green');
  
   buttons.forEach(function(buttons){
    buttons.addEventListener('click',function(e){
      let value = e.target.dataset.num;
      screen.value+=value;
  console.log(screen.value)
    })
   }); 

   equal.addEventListener('click',function(e) {
    if(screen.value === ''){
      screen.value="please Enter";
    }
    else{
      let ans=eval(screen.value);
      console.log(ans)
      screen.value=ans;
    }

   }) 

   clear.addEventListener('click',function(eee){
    screen.value=""
   })

   })();