// отправляем запрос на сервер

const myForm = document.getElementById('my-form')
const url = 'http://localhost:3000//' // сюда отправляем запрос

myForm.addEventListener('submit', async event => {
    event.preventDefault() // отключили, чтобы выполнит запрос POST

    const formData = new FormData(myForm) // new FormData создает пары ключ-значение для любых данных формы. Он обрабатывает не только текстовые элементы, но и поля загрузки файлов.
    formData.append('user', true) // добавили новое поле
    const response = await fetch(url, {
        method: 'post',
        body: formData
    })

    const result = await response.text()
    alert(result)
})

// еще методы FormData()
// FormData.append(key, value) или FormData.append(key, blob, filename) — добавляет данные в форму;
// FormData.delete(key) — удаляет поле формы;
// FormData.set(key, value) — добавляет данные, при необходимости удаляя дублирующиеся ключи.

