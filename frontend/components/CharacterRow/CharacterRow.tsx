
import { Character } from '@components/CharactersList/Character.type'
import axios from 'axios'
import { Dispatch } from 'react'
import { AiFillHeart } from "react-icons/ai"

const UPVOTE_CHARACTER_URL = process.env.API_URL + "characters"

interface CharacterRowComponentProps {
    id: number;
    name: string;
    pic: string;
    homeworld?: string;
    setHasVoted: (hasVoted: boolean) => void;
    setCharacters: Dispatch<React.SetStateAction<Character[]>>
    hasVoted: boolean;
    votes?: number;
}

export const CharacterRow: React.FC<CharacterRowComponentProps> = ({ id, name, pic, homeworld, votes, setHasVoted, hasVoted, setCharacters }) => {

    const handleClick = async () => {
        const character = (await axios.post<Character>(UPVOTE_CHARACTER_URL, { id })).data
        setHasVoted(true)
        setCharacters(prevState => {
            const characterIndex = prevState.findIndex(character => character.id === id)
            prevState.splice(characterIndex, 1)
            prevState.push(character)
            return [...prevState]
        })
    }

    return (
        <li className="flex h-40 bg-gray-100 py-4 px-8 mb-4 items-center" >
            <img className="mr-4 w-24 object-contain" src={pic}></img>
            <div className="mr-auto">
                <h3 className="font-bold">{name}</h3>
                <h4>{homeworld}</h4>
            </div>
            {
                hasVoted ? <div className="flex items-center">
                    <span className="mr-2">{votes ?? 0}</span>
                    <AiFillHeart />
                </div> : <button onClick={handleClick} className="flex items-center h-10 bg-green-200 py-4 px-6">upvote</button>
            }
        </li>
    )
}