import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addDigimonsThunk } from '../../store/modules/digimons/thunks';

export const Search = () => {

    const [input, setInput] = useState('');
    const [error, setError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const dispatch = useDispatch();

    const handleSearch = () => {
        setError(false);
        dispatch(addDigimonsThunk(input, setError, setIsLoading));
        setInput('');
    }

    return (
        <div>
            <h2>Procure pelo seu Digimon!</h2>
            <div>
                <input 
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder='Procure seu Digimon' 
                />
            </div>
            <div>
                {error && <span>Digimon não encontrado</span>}
            </div>
            <div>{isLoading && <span>Carregando</span>}</div>
            <div>
                <button disabled={!input} onClick={handleSearch}>Pesquisar</button> 
            </div>
        </div>
    )
}

//disbaled deixa o botão desabilitado enquanto o input não tiver conteúdo
//setError no dispatch para poder utilizá-lo no thunks.js