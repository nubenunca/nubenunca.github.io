// move this
const addPokemon = (pokemon) => {
  const newPokemon = document.createElement("div");
  newPokemon.innerHTML = `
              <h1>${pokemon.name}</h1>
              <image 
                src=${pokemon.sprites.front_default} 
                alt=${pokemon.name}>
              </image>
            `;
  return newPokemon;
};
