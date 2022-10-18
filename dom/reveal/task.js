const revealArr = Array.from(document.getElementsByClassName('reveal'));
document.addEventListener("scroll", isVisible);

function isVisible() {
    revealArr.forEach(element => {
        const { top, bottom} = element.getBoundingClientRect();

        if(bottom < 0){
            return element.classList.remove('reveal_active');
        }
        if(top > window.innerHeight) {
            return element.classList.remove('reveal_active');
        }
        
        return element.classList.add('reveal_active');
    })
}