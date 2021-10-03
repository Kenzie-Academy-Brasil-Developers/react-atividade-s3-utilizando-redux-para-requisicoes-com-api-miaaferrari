import axios from "axios";
import { addDigimons } from './action';

export const addDigimonsThunk = (digimon, setError, setIsLoading
    ) => (dispatch) => {
        setIsLoading(true);
    const digimonName = digimon.toLowerCase();
    axios.get(`https://digimon-api.vercel.app/api/digimon/name/${digimonName}`)
        .then(res => {
            dispatch(addDigimons(res.data[0]))
            console.log(res.data)
            setIsLoading(false);
        })
        .catch((e) => {
            setError(true)
            setIsLoading(false);
        })

}

