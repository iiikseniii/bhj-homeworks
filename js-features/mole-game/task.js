let playArea = document.getElementsByClassName('hole');
let deadCount = document.getElementById('dead');
let lostCount = document.getElementById('lost');

for (let i = 0; i < playArea.length; i++) {
  playArea[i].onclick = function() {
    if (playArea[i].className === 'hole') {
      lostCount.textContent++;
    } else {
      deadCount.textContent++;
    }

    if (lostCount.textContent === '5') {
      alert('Вы проиграли');
      restart();
    } 
    
    if (deadCount.textContent === '10') {
      alert('Вы выиграли!')
      restart();
    }
    return;
  }
}

function restart(){
  deadCount.textContent = 0;
  lostCount.textContent = 0;
}