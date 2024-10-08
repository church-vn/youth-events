// // push
function start () {
	Push.create("Уведомление от chill-vn", {
		body: "Новое мероприятие 16_07_2023",
		icon: 'https://youth-events.github.io/chill/images/coffee_icon.png',
		timeout: 4000
	});
}
document.querySelector('#btn').addEventListener('click', () => start());
