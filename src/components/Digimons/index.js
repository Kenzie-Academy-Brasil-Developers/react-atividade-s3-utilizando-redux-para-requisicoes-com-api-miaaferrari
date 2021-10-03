import { useSelector } from "react-redux"

export const Digimons = () => {
    
    const {digimons} = useSelector(store => store)
    console.log(digimons);

    return (
        <div>
            <ul>
                {digimons.map((digimon, index) => (
                    <li key={index}>{digimon.name}</li>
                ))}
            </ul>
        </div>
    )
}