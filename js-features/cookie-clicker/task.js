let cookie = document.getElementById("cookie");
let clickCounter = document.getElementById("clicker__counter");
let count = 0;

cookie.addEventListener('click', ()=>{
    document.getElementById("clicker__counter").textContent = count++;
    function resize(){
      if(count % 2 ===0){
        cookie.width = 250;
      }else{
        cookie.width = 200;
      }
    }
    resize();
  }
)