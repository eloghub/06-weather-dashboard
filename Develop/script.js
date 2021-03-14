var startButton = $("#submitbutton")
var city;
var apiKey = "a79bbb9b57ab12b21c5b5e94a898ba2b"

console.log(startButton);

startButton.click(function(event){
  event.preventDefault()
  console.log($("input").val())
  city = $("input").val()

  var apiUrl = "https://api.openweathermap.org/data/2.5/weather?id=" + city + "&appid=" + "a79bbb9b57ab12b21c5b5e94a898ba2b"
  // var apiUrl = "api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=56839525d53b8a5c92890fc9ebc70aff"
  fetch(apiUrl).then(response=>response.json()).then(data=>{
    console.log(data.weather.id);
  })
});

