import { CharacterRow } from "@components/CharacterRow"
import axios from "axios";
import { Fragment, useEffect, useState } from "react";

const CHARACTERS_URL = "http://localhost:3001/characters"

export const CharactersList: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [characters, setCharacters] = useState([]);

    const fetchCharacters = async () => {
        setIsError(false);
        setIsLoading(true);

        try {
            const result = await axios(CHARACTERS_URL);
            setCharacters(result.data);
        } catch (error) {
            setIsError(true);
        }

        setIsLoading(false);
    }

    useEffect(() => {
        fetchCharacters();
    }, []);

    const CharacterRows = characters.map(({ id, name, pic, homeworld }) => <CharacterRow key={id} name={name} homeworld={homeworld} pic={pic} />)
    return (
        <Fragment>
            {isError && <div>Something went wrong ...</div>}

            {isLoading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {CharacterRows}
                </ul>)}
        </Fragment>
    )
}
