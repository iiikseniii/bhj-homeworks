//1
let count = 59;
let counter = setInterval(timer, 1000); 

function timer(){
  count = count - 1;
  if (count <= 0){
    clearInterval(counter);
    alert("Вы победили в конкурсе!")
    return;
  }
  document.getElementById("timer").textContent = count ; 
}

