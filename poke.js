document.addEventListener("DOMContentLoaded", e => {
    const pokeURL = `https://pokeapi.co/api/v2/pokemon/?limit=10`;
    const pokemon = [];
    // go to the pokeURL
    // parse the json response
    // store the information in variable pokemon
    const appendHTML = function(){
        const pokeList = document.getElementById("poke-list")
        pokemon.forEach(elem => {
            fetch(elem.url)
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    const pokeName = document.createElement("span")
                    pokeName.innerHTML = data.name;

                    const pokeImage = document.createElement("img");
                    pokeImage.src = data.sprites.front_shiny;

                    const pokeElem = document.createElement("li");
                    pokeElem.appendChild(pokeImage)
                    pokeElem.appendChild(pokeName)

                    pokeList.appendChild(pokeElem)


                })
            })       
    }

    fetch(pokeURL)
        .then(response => response.json())
        .then(data => pokemon.push(...data.results))
        .then(appendHTML)
})