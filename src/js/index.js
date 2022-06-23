import "core-js";
import "regenerator-runtime/runtime";

import Character from "./character";
import { getCharacters } from "./character_service";

async function loadCharacters() {
    let characters = []
    let charactersJSON = await getCharacters()
    charactersJSON.forEach(character => {
        const newCharacter = new Character(
            character["id"], character["name"], character["status"],
            character["species"], character["type"], character["gender"]
        )
        characters.push(newCharacter)
    })
    console.log(characters)
}

loadCharacters()