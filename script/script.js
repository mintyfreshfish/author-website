const weatherCodes = [113,116,119,122,143,176,179,182,185,200,227,230,248,260,263,266,281,284,293,296,299,302,305,308,311];
const weatherIcons = ['../assets/weather/cloud.png','../assets/weather/hrain.png','../assets/weather/lrain.png','../assets/weather/mist.png','../assets/weather/pcloud.png','../assets/weather/snow.png','../assets/weather/sunny.png','../assets/weather/thunder.png']

function codeIcon(code) {
    switch (code) {
        case 113:
            return '../assets/weather/sunny.png';
            break;
        case 116:
        case 119:
            return '../assets/weather/cloud.png';
            break;
        case 122:
        case 143:
        case 248:
        case 260:
            return '../assets/weather/mist.png';
            break;
        case 176:
        case 263:
        case 266:
        case 293:
        case 296:
        case 299:
            return '../assets/weather/lrain.png';
            break;
        case 179:
        case 182:
        case 185:
        case 227:
        case 230:
        case 281:
        case 311:
            return '../assets/weather/snow.png';
            break;
        case 200:
            return '../assets/weather/thunder.png';
            break;
        case 284:
        case 302:
        case 305:
        case 308:
            return '../assets/weather/hrain.png';
            break;
    }
}

function convert(input) {
    return moment(input, 'HH:mm').format('h:mm A');
}

function icons() {

}

url = 'http://api.weatherstack.com/current'

access_key= '157d6eef6680948878d7a86aa8f67da1',
query= 'reykjavik'

url = `http://api.weatherstack.com/current?access_key=${access_key}&query=${query}`

fetch(url)
.then(function(response) {
  return response.json();
}).then(function(json) {
    const time = convert(json.location.localtime.slice(11)) + '\n';
    const iconNode = document.createElement('img');
    iconNode.src = codeIcon(json.current.weather_code);
    
    const description = json.current.weather_descriptions + '\n';
    const fLike = json.current.feelslike + ' C&deg' + '\n';
    document.getElementById("FalskTime").innerHTML=time;
    document.getElementById("FalskTemp").innerHTML=fLike;
    document.getElementById("FalskDesc").innerHTML=description;
    document.getElementById("FalskIcon").appendChild(iconNode);

})