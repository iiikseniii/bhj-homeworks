const tabArr = Array.from(document.getElementsByClassName('tab'));
const tabContentArr =  Array.from(document.getElementsByClassName('tab__content'));

tabArr.forEach((tab)=> tab.addEventListener("click", activeteTab));

function activeteTab(e){
    removeActive();
    let target = e.target;
    let index = tabArr.findIndex((tab) => tab === target); 
    target.classList.toggle('tab_active');
    tabContentArr[index].classList.toggle('tab__content_active');
}

function removeActive(){
    for(let i =0; i< tabArr.length; i++){
        tabArr[i].classList.remove('tab_active');
        tabContentArr[i].classList.remove('tab__content_active');
    }
}