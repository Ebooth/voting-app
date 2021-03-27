import { CharacterRow } from "@components/CharacterRow";
import { useLocalStorage } from "hooks/use-local-storage";
import { Fragment, useMemo } from "react";
import useFetch from 'use-http';
import type { Character } from "./Character.type";





const CHARACTERS_URL = "http://localhost:3001/characters"

export const CharactersList: React.FC = () => {
    const [hasVoted, setHasVoted] = useLocalStorage('hasVoted', false);
    const { loading, error, data = [] } = useFetch<Character[]>(CHARACTERS_URL, {}, [])

    const CharacterRows = useMemo(() => {
        let characters = data
        if (hasVoted) {
            characters.sort((a, b) => (b.votes ?? 0) - (a.votes ?? 0))
        }
        const rows = data.map(({ id, name, pic, homeworld, votes }) => <CharacterRow key={id} id={id} name={name} homeworld={homeworld} pic={pic} votes={votes} hasVoted={hasVoted} setHasVoted={setHasVoted} />)
        return rows
    }, [hasVoted])

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





