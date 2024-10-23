// форма подписки на уведомления
const token = '7696987697:AAGgNVbuq7B17KeYzSHeJ5bEGSXNjM9lzBM';
const chatId = '746586393';
const URL_API = 'https://api.telegram.org/';

const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');

sendButton.addEventListener('click', (event) => {
event.preventDefault();
const message = 'Тема сообщения: ' + messageInput.value + '\nИмя: ' + sendName.value + '\nНомер телефона: ' + sendTel.value + '\nКодовое слово: ' + messageInputpass.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Ваша заявка на уведомления зарегистрирована!✅ Спасибо!💚'))
.catch(error => console.error(error));
}
});

// форма отключения подписки на уведомления
const messageInput_unsubscribe = document.getElementById('messageInput_unsubscribe');
const sendButton_unsubscribe = document.getElementById('sendButton_unsubscribe');

sendButton_unsubscribe.addEventListener('click', (event) => {
event.preventDefault();
const message = 'Тема сообщения: ' + messageInput_unsubscribe.value +  '\nИмя: ' + sendName_unsubscribe.value + '\nНомер телефона: ' + sendTel_unsubscribe.value + '\nКодовое слово: ' + messageInputpass_unsubscribe.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Ваша заявка на отключение уведомлений отправлена!✅'))
.catch(error => console.error(error));
}
});

// форма регистрации на квартирник
const messageInput_kvartirnik = document.getElementById('messageInput_kvartirnik');
const sendButton_kvartirnik = document.getElementById('sendButton_kvartirnik');

sendButton_kvartirnik.addEventListener('click', (event) => {
event.preventDefault();
const message = 'Тема сообщения: ' + messageInput_kvartirnik.value + '\nИмя: ' + sendName_kvartirnik.value + '\nНомер телефона: ' + sendTel_kvartirnik.value + '\nКодовое слово: ' + messageInputpass_kvartirnik.value;
if (message) {
axios.post(`${URL_API}bot${token}/sendMessage`, {
chat_id: chatId,
text: message,
})
.then(response => console.log(response), alert('Регистрация на квартирник прошла успешно!✅'))
.catch(error => console.error(error));
}
});






