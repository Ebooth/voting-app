import { CharacterRow } from "@components/CharacterRow";
import { useLocalStorage } from "hooks/use-local-storage";
import { Fragment, useEffect, useMemo, useState } from "react";
import useFetch from 'use-http';
import type { Character } from "./Character.type";

const CHARACTERS_URL = "http://localhost:3001/characters"

export const CharactersList: React.FC = () => {
    const [characters, setCharacters] = useState<Character[]>([])
    const [hasVoted, setHasVoted] = useLocalStorage('hasVoted', false);
    const { get, loading, error, response } = useFetch<Character[]>(CHARACTERS_URL, {}, [])

    const loadCharacters = async () => {
        const characters = await get()
        if (response.ok) setCharacters(characters)
    }

    useEffect(() => { loadCharacters() }, [])

    const CharacterRows = useMemo(() => {
        if (hasVoted) {
            characters.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0))
        }
        const rows = characters.map(({ id, name, pic, homeworld, votes }) => <CharacterRow key={id} id={id} name={name} homeworld={homeworld} pic={pic} votes={votes} hasVoted={hasVoted} setHasVoted={setHasVoted} setCharacters={setCharacters} />)
        return rows
    }, [hasVoted, characters])

    return (
        <Fragment>
            {error && <div>Something went wrong ...</div>}

            {loading ? (
                <div>Loading ...</div>
            ) : (
                <ul>
                    {CharacterRows}
                </ul>)}
        </Fragment>
    )
}





