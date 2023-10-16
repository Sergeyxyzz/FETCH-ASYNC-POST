// способ устаревший, лучше использовать либо promiseFetch, либо asyncFetch

const url = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

const request = new XMLHttpRequest()
request.open('GET', url)
request.send()

request.onload = () => {
    if (request.status >= 200 && request.status < 400) {
        // Запрос успешный, выводим в консоль возвращенные данные JSON
        const data = JSON.parse(request.response)
        console.log(data)
    } else {
        // Ошибка сервера
        // Пример: INTERNAL SERVER ERROR: 500 error
        console.log(`${request.statusText}: ${request.status} error`)
    }
}

// Ошибка запроса
request.onerror = () => console.log(request.statusText)