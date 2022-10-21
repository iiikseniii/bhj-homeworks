const chat = document.querySelector('.chat-widget');
const sideWidget = document.querySelector('.chat-widget__side');
const userInput = document.getElementById('chat-widget__input');

let robot = [
    'Кто тут?',
    'Не пишите нам больше!', 
    'Здесь никого нет', 
    'Где ваша совесть?',
    'Мы ничего у вас не купим!',
    'Все операторы сейчас заняты',
    'Напишите через 10 лет'
  ];
  
sideWidget.addEventListener('click', () => {
   chat.classList.toggle('chat-widget_active');
});
  
userInput.addEventListener('keydown', (e) => {
    let time = new Date();
    let currentTime = time.getHours() + ':' + time.getMinutes();
  
    if (e.key === 'Enter') {
        if (!userInput.value) {
            return false;
        }
        const messages = document.querySelector( '.chat-widget__messages' );
        messages.innerHTML += `
        <div class="message_client">
        <div class="message__time">` + currentTime + `</div>
        <div class="message__text">` + userInput.value  + `</div>
        </div>
        `;
        userInput.value = '';
        setTimeout(() => {
        messages.innerHTML += `
            <div class="message">
            <div class="message__time">` + currentTime + `</div>
            <div class="message__text">` + robot[Math.floor(Math.random() * robot.length)] + `</div>
            </div>
        `;
        }, 1000);
  };
});