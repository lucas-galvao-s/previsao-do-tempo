

const key = "5cf25d4b2069964c12f277be2ce7e494"

function colocarDadosNaTela(dados){
    console.log(dados);
    document.querySelector(".local").innerHTML = "Tempo em " + dados.name;
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C";
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description;
    document.querySelector(".umidade").innerHTML = dados.main.humidity + "%";
    document.querySelector(".icone-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`;
}

async function buscarLocal(local){
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${local}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json());

    colocarDadosNaTela(dados);
}

function clickOnBotton() {
    const local = document.querySelector(".input-local").value;
    buscarLocal(local);
}