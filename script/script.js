/**WEATHER API**/
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

/**LETTERS**/

//Dictionary//
const letdb = {
    'aennnaArchive': ['Ind-Letters/AeDa1.html','Ind-Letters/DaAe1.html','Ind-Letters/AeDa2.html','Ind-Letters/DaAe2.html'],
    'suraArchive': [],
    'nieraArchive': ['Ind-Letters/NiZe1.html','Ind-Letters/ZeNi1.html'],
    'davianArchive': ['Ind-Letters/AeDa1.html','Ind-Letters/DaAe1.html','Ind-Letters/DaAe1.html','Ind-Letters/DaAe2.html'],
    'skeigiArchive': ['Ind-Letters/ZeSk1.html'],
    'zephyraArchive': ['Ind-Letters/NiZe1.html', 'Ind-Letters/ZeSk1.html','Ind-Letters/ZeNi1.html'],
    'raaviArchive': [],
    'otherArchive': []
};

//Letter Object//
// class Letter {
//     _author;
//     _receiver;
//     _text;
//     _date;
//     _tags = [];
//     _ID;
//     _url;

//     constructor(author, receiver, date, text) {
//         this._author = author;
//         this._receiver = receiver;
//         this._text = text;
//         this._date = date;
//         this._ID = `${this.author.slice(0,2)}-${this._receiver.slice(0,2)}-${letdb[`${author}Archive`].length+1}`
//         this._url = `Ind-Letters/${this._ID}.html`
//         letdb[`${author.lower()}Archive`] = this;
//         letdb[`${receiver.lower()}Archive`] = this;
//     }

//     get author() {
//         return this._author;
//     }
//     get receiver() {
//         return this._receiver;
//     }
//     get text() {
//         return this._text;
//     }
//     get date() {
//         return this._date;
//     }
//     get tags() {
//         return this._tags;
//     }
//     get ID() {
//         return this._ID;
//     }
//     get url() {
//         return this._url;
//     }

//     set author(author) {
//         this._author = author;
//     }
//     set receiver(receiver) {
//         this._receiver = receiver;
//     }
//     set text(text) {
//         this._text = text;
//     }
//     set date(date) {
//         this.date = date;
//     }
//     set tags(tag) {
//         this._tags.push(tag);
//     }
//     set ID(ID) {
//         this._ID = ID;
//     }
//     set url(url) {
//         this._url = url;
//     }

//     describe = () => {
//         console.log(`Letter ${this._ID}: \n     Author: ${this._author}\n     Receiver: ${this._receiver}\n     Date: ${this._date}\n     Tags: ${this._tags.toString()}`);
//     }

// }

// //New Letters//
// const n1 = new Letter('Niera','Zephyra', '3/8/1005', "I hope this letter finds you. I checked every book I can and haven't found any mention of Ravens Port. Sura insists that she knows where it is, but… I guess if I get a letter back I'll know for sure. I'll also know never to play any sort of geography game against Sura. It's best to avoid playing Sura in any sort of trivia game, but you don't have to worry about that.</br>I wanted to thank you and apologize. Sura said you spent a lot of time with me while you were here, and I'm sorry I was rude. I'm not usually so… mean. I'm sure you heard the story behind it all, and I'd rather not write it out.</br>I also wanted to thank you for being kind to me. You had no reason to be, and you could have easily taken advantage of the situation. You are definitely kinder than I will ever be. </br>My guess is that Aenna forced you to leave somehow. She is the cause of everything horrible, and the things people are saying about you and Davian are pretty horrible. I struggle to believe you came to Falsk on an assassination contract. Framing you seems like something Aenna would do. Probably another diabolical plot designed to ruin every life except her own. Sura didn't say I was wrong when I brought it up, which is essentially an affirmation. It's probably good you got away. Aenna is as evil as they come. She belongs with all the monsters you taken down. I hope someone else outsmarts her someday and she can get what she deserves. Not sure if there's a punishment big enough for her at this point. Hanging would be too kind. </br>I hope you return to Ravens Port, and that this letter gets there as well. I guess you could be anywhere, but I didn't want to wait on sending you a letter – writing is a nice distraction from my own misery.");




//Add to list//
addList = (name) => {
    const charList = letdb[name];
    for (let i = 0; i < charList.length; i++) {
        var a = document.createElement('a');
        var linkText = document.createTextNode(`${charList[i].slice(12,14)}-${charList[i].slice(14,16)}-${charList[i].slice(16,17)}`);
        a.appendChild(linkText);
        a.title = `${name}_${linkText}`;
        a.href = charList[i];
        li = document.createElement('li');
        li.appendChild(a)
        document.getElementById(name).appendChild(li);
    }
}

lettersLoad = () => {
    document.getElementById('aennaTotal').innerHTML = letdb['aennnaArchive'].length;
    document.getElementById('nieraTotal').innerHTML = letdb['nieraArchive'].length;
    document.getElementById('raaviTotal').innerHTML = letdb['raaviArchive'].length;
    document.getElementById('skeigiTotal').innerHTML = letdb['skeigiArchive'].length;
    document.getElementById('suraTotal').innerHTML = letdb['suraArchive'].length;
    document.getElementById('davianTotal').innerHTML = letdb['davianArchive'].length;
    document.getElementById('zephyraTotal').innerHTML = letdb['zephyraArchive'].length;
    document.getElementById('otherTotal').innerHTML = letdb['otherArchive'].length;
    addList('aennnaArchive');
    addList('nieraArchive');
    addList('raaviArchive');
    addList('skeigiArchive');
    addList('suraArchive');
    addList('davianArchive');
    addList('zephyraArchive');
    addList('otherArchive');
}

//New Letters//
