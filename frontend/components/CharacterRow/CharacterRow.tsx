
import axios from 'axios'

const UPVOTE_CHARACTER_URL = "http://localhost:3001/characters"

interface CharacterRowComponentProps {
    id: number;
    name: string;
    pic: string;
    homeworld?: string;
    setHasVoted: (hasVoted: boolean) => void
    hasVoted: boolean;
    votes?: number;
}

export const CharacterRow: React.FC<CharacterRowComponentProps> = ({ id, name, pic, homeworld, votes, setHasVoted, hasVoted }) => {

    const handleClick = async () => {
        await axios.post(UPVOTE_CHARACTER_URL, { id })
        setHasVoted(true)
    }

    return (
        <li className="flex h-40 bg-gray-100 py-4 px-8 mb-4 items-center" >
            <img className="mr-4" src={pic}></img>
            <div className="mr-auto">
                <h3 className="font-bold">{name}</h3>
                <h4>{homeworld}</h4>
            </div>
            {
                hasVoted ? <div>{votes ?? 0}</div> : <button onClick={handleClick} className="flex items-center h-10 bg-green-200 py-4 px-6">upvote</button>
            }

        </li>
    )
}