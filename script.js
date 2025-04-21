"use strict";

async function fetchPokeData() {

    // 1 ... 1025, as of Scarlet/Violet
    let pokemon_chosen = Math.floor(Math.random() * 1025) + 1;

    try {
        const api_reply = await fetch("https://pokeapi.co/api/v2/pokemon/" + pokemon_chosen);

        if (!api_reply.ok) {
            throw new Error("Resource could not be fetched.")
        }

        const data = await api_reply.json();

        // Sprite Image
        const imageElement = document.getElementById("sprite");
        imageElement.src = data.sprites.front_default;
        imageElement.style.display = "block";

        // Name
        const pokemonName = document.getElementById("name");
        let stringBuffer = data.name;
        stringBuffer = stringBuffer.charAt(0).toUpperCase() + stringBuffer.slice(1);
        pokemonName.innerHTML = "<b>Pokémon Name:</b> " + stringBuffer;

        // ID
        const pokemonId = document.getElementById("id");
        pokemonId.innerHTML = "<b>Pokédex ID:</b> " + data.id;

        // Sound Effect
        const pokemonSound = document.getElementById("sound");
        pokemonSound.src = data.cries.latest;
        document.getElementById("audiobutton").hidden = false;
        
        // Stats

    }

    catch(error) {
        console.error(error);
    }

}

function playAudio() { 
    var x = document.getElementById("sound");
    x.volume = 0.5;
    x.play();
}