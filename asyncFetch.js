// получим данные из интернета через async fetch

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

async function fetchRequestWithError() {
	try {
		const response = await fetch(url)
		if (response.status >= 200 && response.status < 400) {
			const data = await response.json()
			console.log(data)
		} else {
			// обрабатываем ошибку полученную от сервера
			// например: INTERNAL SERVER ERROR: 500 error
			console.log(`${response.statusText}: ${response.status} error`)
		}
	} catch (error) {
		// Обработчик остальных ошибок
		console.log(error)
	}
}

fetchRequestWithError()