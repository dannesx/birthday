const body = document.querySelector('body')
const h1 = document.querySelector('h1')

const daysEl = document.getElementById('days')
const hoursEl = document.getElementById('hours')
const minutesEl = document.getElementById('minutes')
const secondsEl = document.getElementById('seconds')

let currentYear = new Date().getFullYear()
let bday = new Date(`${currentYear}-03-25T00:00:00`)
let today = new Date()

let isMyBday = false

if (today > bday) {
	bday.setFullYear(currentYear + 1)

	if (
		today.getDate() === bday.getDate() &&
		today.getMonth() === bday.getMonth()
	) {
		isMyBday = true
	}
}

function UpdateCountdown() {
	let diff = bday - Date.now()

	let days = Math.floor(diff / (1000 * 60 * 60 * 24))
	let hours = Math.floor(diff / (1000 * 60 * 60))
	let minutes = Math.floor(diff / (1000 * 60))
	let seconds = Math.floor(diff / 1000)

	daysEl.innerText = AddZero(days)
	hoursEl.innerText = AddZero(hours - days * 24)
	minutesEl.innerText = AddZero(minutes - hours * 60)
	secondsEl.innerText = AddZero(seconds - minutes * 60)

	if (diff < 500) {
		ItsToday()
	}
}

function AddZero(number) {
	return number >= 10 ? number : `0${number}`
}

function ItsToday() {
	body.classList.add('bday')
	h1.innerText = "It's today! Happy birthday to me 🥳🎉"
}

if (isMyBday) {
	ItsToday()
} else {
	body.classList.remove('bday')
	setInterval(UpdateCountdown, 1000)
}
