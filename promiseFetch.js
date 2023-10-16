// получим данные из интернета через fetch
const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY'

fetch(url)
	.then((response) => {
		if (response.status >= 200 && response.status < 400) {
			return response.json()
		} else {
			// обрабатываем ошибку, полученную от сервера
			// например INTERNAL SERVER ERROR: 500 error
			console.log(`${response.statusText}: ${response.status} error`)
		}
	})
	.then((data) => {
		console.log(data)
	})
	.catch((error) => {
		// обработчик остальных ошибок
		console.log(error)
	})
