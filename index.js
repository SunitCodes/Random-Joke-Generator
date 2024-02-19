
const askLine = document.getElementById("setup");
const pickupLine = document.getElementById("punchline");

const button = document.getElementById("btnid");

const url = 'https://official-joke-api.appspot.com/jokes/random';


const getData = async() => {
    let response = await fetch(url);

    let joke = await response.json();
    console.log(joke);
    console.log(joke.setup);
    console.log(joke.punchline);

    askLine.innerHTML = `${joke.setup}`;
    pickupLine.innerHTML = `${joke.punchline}`;
}


button.addEventListener("click",getData);