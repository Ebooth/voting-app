import { CharacterRow } from "@components/CharacterRow"
import { characters } from "@data/characters"

export const CharactersList: React.FC = () => {
    const CharacterRows = characters.map(({ id, name, pic, homeworld }) => <CharacterRow key={id} name={name} homeworld={homeworld} pic={pic} />)
    return (
        <ul>
            {CharacterRows}
        </ul>
    )
}
