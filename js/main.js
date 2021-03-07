const token = "72cdaf5f7116f28263839eb6238739f9"
async function x() {
    let city = $(".form-control").val()
    let fetched = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${token}&lang=ru`)
    fetched = await fetched.json()

    // Вставка
    $(".cels").text(`${~~(fetched.main.temp)}°, ощущаеться как ${~~(fetched.main.feels_like)}°`)
    $(".description").text(`${fetched.weather[0].description}`)
    $(".windspeed").text(`${fetched.wind.speed} м/с`)
    $(".humidityproc").text(`${fetched.main.humidity}%`)
    $(".pressuretext").text(`${fetched.main.pressure}`)
    console.log(fetched)
}
