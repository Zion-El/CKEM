const api_key = 'a35a14e20f166d89b77f1213aa3f50c4'

const endpoint = `https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid=${api_key}`

fetch(endpoint).then(
    (res)=> res.json()
).then(
    (data)=> console.log(data)
)