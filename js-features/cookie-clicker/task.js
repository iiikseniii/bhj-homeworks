let cookie = document.getElementById("cookie");
let clickCounter = document.getElementById("clicker__counter");
let count = 0;

cookie.addEventListener('click', () => {
    document.getElementById("clicker__counter").textContent = ++count;
    function resize(){
      cookie.width = count % 2 === 0 ? 215 : 200;
    }
    resize();
  }
)