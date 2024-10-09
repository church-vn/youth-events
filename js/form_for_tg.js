const token = '7696987697:AAGgNVbuq7B17KeYzSHeJ5bEGSXNjM9lzBM';
const chatId = '746586393';
const URL_API = 'https://api.telegram.org/';

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (event) => {
event.preventDefault();
const message = 'Имя: ' + sendName.value + '\nНомер телефона: ' + sendTel.value + '\nТема сообщения: ' + messageInput.value + '\nКодовое слово: ' + messageInputpass.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Ваша заявка на уведомления зарегистрирована!✅ Спасибо!💚'))
.catch(error => console.error(error));
}
});


const messageInput_unsubscribe = document.getElementById('messageInput_unsubscribe');
const sendButton_unsubscribe = document.getElementById('sendButton_unsubscribe');

sendButton_unsubscribe.addEventListener('click', (event) => {
event.preventDefault();
const message = 'Имя: ' + sendName_unsubscribe.value + '\nНомер телефона: ' + sendTel_unsubscribe.value + '\nТема сообщения: ' + messageInput_unsubscribe.value + '\nКодовое слово: ' + messageInputpass_unsubscribe.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Ваша заявка на отключение уведомлений отправлена!✅'))
.catch(error => console.error(error));
}
});






