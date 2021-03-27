

interface CharacterRowComponentProps {
    name: string;
    pic: string;
    homeworld?: string;
}

export const CharacterRow: React.FC<CharacterRowComponentProps> = ({ name, pic, homeworld }) => {
    return (
        <li className="flex h-20 bg-gray-100 py-4 px-8 mb-4">
            <img className="mr-4" src={pic}></img>
            <div>
                <h3 className="font-bold">{name}</h3>
                <h4>{homeworld}</h4>
            </div>
        </li>
    )
}