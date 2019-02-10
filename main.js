

function imageSuccess(response) {
    // var body = document.getElementsByTagName('body')
    // body.style.backgroundImage = 'url("' + response.data.urls.regular + '")';

    $('body').css('background-image', 'url("' + response.data.urls.regular + '")')

}
function imageFail(error) {
    console.log(error)
}

function addingWeather(response) {
    // temp = document.createElement('h2')
    const temp = response.data.main.temp + ' ℃'
    // document.body.appendChild(temp)
    $('h3').text(temp)

    // const icon = document.createElement('img')
    let icon = 'http://openweathermap.org/img/w/' + response.data.weather[0].icon + '.png'
    $('img').attr('src', icon)
    // document.body.appendChild(icon)
    // const descrip = document.createElement('h3')
    // descrip.textContent = response.data.weather[0].description
    // document.body.appendChild(descrip)

}

function addingQuot(response) {
    // const quot = document.createElement('h2')
    let quot = response.data.quoteText
    $('h4').text(quot)

    // document.body.appendChild(quot)
    // const author = document.createElement('h3')
    let author = response.data.quoteAuthor
    $('h5').text(author)

    // document.body.appendChild(author)

}

axios({
    method: 'get',
    url: 'https://api.unsplash.com/photos/random?client_id=e7a47fcff0aedae82509da3b9e26594b705c8284afa28ecf9baa3007c29f2791'
})
    .then(imageSuccess)
    .catch(imageFail);


axios({
    method: 'get',
    url: 'https://api.openweathermap.org/data/2.5/weather?q=Riyadh&units=metric&appid=4817a74b9114fc2eb89c2fc2782b1183'
})
    .then(addingWeather)
    .catch()

axios({
    method: 'get',
    url: 'https://api.forismatic.com/api/1.0/?method=getQuote&format=json&lang=en'
})
    .then(addingQuot)
    .catch()

function addTime() {

    let time = moment().format('h:mm A')
    $('h2').text(time)
}
addTime()