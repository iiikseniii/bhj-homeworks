const rotator = document.querySelector('.rotator');

function timer() {
  setTimeout(rotate, 1000);
};

function rotate() {
  let active = document.querySelector('.rotator__case_active');
  
  if (active.nextElementSibling !== null) {
    active.classList.remove('rotator__case_active');
    active.nextElementSibling.classList.add('rotator__case_active');
  } else {
    active.classList.remove('rotator__case_active');
    rotator.firstElementChild.classList.add('rotator__case_active');
  }
  timer();
};

timer();
