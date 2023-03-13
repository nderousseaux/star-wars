const slides = {
	0: document.querySelectorAll('[data-slide="1"]'),
	1: document.querySelectorAll('[data-slide="2"]'),
	2: document.querySelectorAll('[data-slide="3"]'),
	3: document.querySelectorAll('[data-slide="4"]'),
	4: document.querySelectorAll('[data-slide="5"]'),
	5: document.querySelectorAll('[data-slide="6"]'),
}
const maxi = 5;

let prevSlide = 0
let currentSlide = 1

const ANIMATION_DURATION = 1000

const nextButton = document.querySelector('.js-arrow-right')
const prevButton = document.querySelector('.js-arrow-left')

function init() {
	updateSlide(false)

}

function updateSlide(retour) {
	if (!retour) {
		slides[prevSlide].forEach(slide => {
			slide.classList.add('leave')
		})
	}

	slides[prevSlide].forEach((slide) => {
		slide.classList.remove('active')
	})

	slides[currentSlide].forEach((slide) => {
		slide.classList.add('active')
	})

	// On ajoute les classes active pour stepper inférieures à la slide courante
	for (let i = 0; i < currentSlide; i++) {
		slides[i].forEach((elem) => {
			//Si l'élément est une liste 'li'
			if (elem.tagName === 'LI') {
				elem.classList.add('active')
			}
		})
	}
}

init()

nextButton.addEventListener('click', () => {
	if (currentSlide === maxi) return
	
	prevButton.classList.remove('disabled')
	
	prevSlide = currentSlide
	currentSlide++

	if (currentSlide === maxi)
		nextButton.classList.add('disabled')

	updateSlide(false)
})

prevButton.addEventListener('click', () => {
	if (currentSlide === 0) return

	nextButton.classList.remove('disabled')
	slides[currentSlide].forEach((slide) => {
		slide.classList.remove('leave')
	})
	
	prevSlide = currentSlide
	currentSlide--

	slides[currentSlide].forEach((slide) => {
		slide.classList.remove('leave')
	})

	if (currentSlide === 0)
		prevButton.classList.add('disabled')

	updateSlide(true)
})