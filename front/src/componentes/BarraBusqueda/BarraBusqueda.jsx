import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { barraBusqueda } from "../../utils/fetch"; // Actualiza el import según la estructura de tu proyecto

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState({ subforos: [], recursos: [] });

    const searchBarra = async (term) => {
        try {
            const response = await barraBusqueda(term);
            if (response && response.data) {
                const { subforos, recursos } = response.data;
                setSearchResults({ subforos, recursos });
                console.log("Resultados de la búsqueda:", { subforos, recursos });
            } else {
                console.error('La respuesta de la API no es válida:', response);
            }
        } catch (error) {
            console.error('Error al obtener los resultados de la búsqueda:', error);
        }
    };

    const debouncedSearch = useCallback(debounce((term) => {
        if (term.length > 2) {
            searchBarra(term);
        } else {
            setSearchResults({ subforos: [], recursos: [] });
        }
    }, 300), []); // 300 ms de debounce

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        debouncedSearch(term);
    };

    const handleResultClick = (item) => {
        console.log("Item seleccionado:", item);
        // Puedes manejar la acción al seleccionar un resultado aquí
    };

    return (
        <div>
            <input
                type="text"
                value={searchTerm}
                onChange={handleInputChange}
                placeholder="Busca subforos o recursos"
            />
            <div>
                {searchResults.subforos.length > 0 && (
                    <div>
                        <h3>Subforos</h3>
                        <ul>
                            {searchResults.subforos.map(subforo => (
                                <li key={subforo._id} onClick={() => handleResultClick(subforo)}>
                                    {subforo.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
                {searchResults.recursos.length > 0 && (
                    <div>
                        <h3>Recursos</h3>
                        <ul>
                            {searchResults.recursos.map(recurso => (
                                <li key={recurso._id} onClick={() => handleResultClick(recurso)}>
                                    {recurso.name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
}

export default SearchBar;
