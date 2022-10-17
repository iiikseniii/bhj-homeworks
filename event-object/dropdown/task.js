const menuList = document.querySelector('.dropdown__list');
const btn = document.querySelector('.dropdown__value');
const arr = Array.from(document.getElementsByClassName("dropdown__link"));

btn.addEventListener('click', clickBtn);
arr.forEach((item, index) => item.onclick = () => chooseItem(index));

function clickBtn(){
    menuList.classList.toggle("dropdown__list_active");
}

function chooseItem(index){
    btn.textContent = arr[index].textContent;
    menuList.classList.remove('dropdown__list_active');
    return false;
}