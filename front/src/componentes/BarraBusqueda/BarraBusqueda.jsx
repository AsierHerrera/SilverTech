// import React, { useState, useCallback } from 'react';
// import debounce from 'lodash.debounce';
// import { useNavigate } from 'react-router-dom';
// import { barraBusqueda } from "../../utils/fetch";
// import { IoSearchSharp } from "react-icons/io5";
// import './BarraBusqueda.css';

// function SearchBar() {
//     const [searchTerm, setSearchTerm] = useState('');
//     const [searchResults, setSearchResults] = useState({
//         subforos: [],
//         recursos: [],
//         comments: [],
//         projects: []
//     });

//     const navigate = useNavigate();

//     const searchBarra = async (term) => {
//         try {
//             //console.log("Searching for:", term);
//             const response = await barraBusqueda(term);
//             //console.log("Raw response:", response);
//             if (response && response.data) {
//                 //console.log("Setting search results:", response.data);
//                 setSearchResults(response.data);
//             } else {
//                 console.error('La respuesta de la API no es válida:', response);
//             }
//         } catch (error) {
//             console.error('Error al obtener los resultados de la búsqueda:', error);
//         }
//     };

//     const debouncedSearch = useCallback(debounce((term) => {
//         //console.log("Debounced search called with term:", term);
//         if (term.length > 2) {
//             searchBarra(term);
//         } else {
//             //console.log("Search term too short, clearing results");
//             setSearchResults({ subforos: [], recursos: [], comments: [], projects: [] });
//         }
//     }, 300), []);

//     const handleInputChange = (e) => {
//         const term = e.target.value;
//         setSearchTerm(term);
//         debouncedSearch(term);
//     };

//     const handleResultClick = (item, type) => {
//         //console.log("Item seleccionado:", item, "Tipo:", type);
//         switch (type) {
//             case 'subforo':
//                 navigate(`/foro`);
//                 break;
//             case 'recurso':
//                 navigate(`/recursos`);
//                 break;
//             case 'comment':
//                 navigate(`/foro/${item.subforum}`);
//                 break;
//             case 'project':
//                 navigate(`/proyectos`);
//                 break;
//             default:
//                 break;
//         }
//     };

//     const renderResults = (items, title, type) => {
//         if (items.length === 0) return null;
//         return (
//             <div className="result-section">
//                 <h3 className="result-title">{title}</h3>
//                 <ul className="result-list">
//                     {items.map(item => (
//                         <li key={item._id} className="result-item" onClick={() => handleResultClick(item, type)}>
//                             {item.name || item.title || item.content}
//                         </li>
//                     ))}
//                 </ul>
//             </div>
//         );
//     };

//     return (
//             <div className="search-container ">
//                 <div className="search-input-container">
//                     <IoSearchSharp className="search-icon" />
//                     <input
//                         type="text"
//                         className="search-input"
//                         value={searchTerm}
//                         onChange={handleInputChange}
//                         placeholder="Buscar"
//                     />
//                 </div>
//                 <div className="results-container">
//                 {renderResults(searchResults.subforos, 'Foro', 'subforo')}
//                             {renderResults(searchResults.recursos, 'Recursos', 'recurso')}
//                             {renderResults(searchResults.comments, 'Comentarios', 'comment')}
//                             {renderResults(searchResults.projects, 'Proyectos', 'project')}
//                 </div>
//             </div>

//     );
// }

// export default SearchBar;


import React, { useState, useCallback } from 'react';
import debounce from 'lodash.debounce';
import { useNavigate } from 'react-router-dom';
import { barraBusqueda } from "../../utils/fetch";
import { IoSearchSharp } from "react-icons/io5";
import './BarraBusqueda.css';

function SearchBar() {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState({
        subforos: [],
        recursos: [],
        comments: [],
        projects: []
    });

    const navigate = useNavigate();

    const searchBarra = async (term) => {
        try {
            //console.log("Searching for:", term);
            const response = await barraBusqueda(term);
            //console.log("Raw response:", response);
            if (response && response.data) {
                //console.log("Setting search results:", response.data);
                setSearchResults(response.data);
            } else {
                console.error('La respuesta de la API no es válida:', response);
            }
        } catch (error) {
            console.error('Error al obtener los resultados de la búsqueda:', error);
        }
    };

    const debouncedSearch = useCallback(debounce((term) => {
        //console.log("Debounced search called with term:", term);
        if (term.length > 2) {
            searchBarra(term);
        } else {
            //console.log("Search term too short, clearing results");
            setSearchResults({ subforos: [], recursos: [], comments: [], projects: [] });
        }
    }, 300), []);

    const handleInputChange = (e) => {
        const term = e.target.value;
        setSearchTerm(term);
        debouncedSearch(term);
    };

    const handleResultClick = (item, type) => {
        //console.log("Item seleccionado:", item, "Tipo:", type);
        switch (type) {
            case 'subforo':
                navigate(`/foro`);
                break;
            case 'recurso':
                navigate(`/recursos`);
                break;
            case 'comment':
                navigate(`/foro/${item.subforum}`);
                break;
            case 'project':
                navigate(`/proyectos`);
                break;
            default:
                break;
        }
        setSearchTerm(''); 
        setSearchResults({ subforos: [], recursos: [], comments: [], projects: [] }); 
    };

    const renderResults = (items, title, type) => {
        if (items.length === 0) return null;
        return (
            <div className="result-section" key={type}>
                <h3 className="result-title">{title}</h3>
                <ul className="result-list">
                    {items.slice(0, 4).map(item => (
                        <li key={item._id} className="result-item" onClick={() => handleResultClick(item, type)}>
                            {item.name || item.title || item.content}
                        </li>
                    ))}
                </ul>
            </div>
        );
    };

    return (
        <div className="search-container">
            <div className="search-input-container">
                <IoSearchSharp className="search-icon" />
                <input
                    type="text"
                    className="search-input"
                    value={searchTerm}
                    onChange={handleInputChange}
                    placeholder="Buscar"
                />
            </div>
            <div className="results-container">
                {renderResults(searchResults.subforos, 'Foro', 'subforo')}
                {renderResults(searchResults.recursos, 'Recursos', 'recurso')}
                {renderResults(searchResults.comments, 'Comentarios', 'comment')}
                {renderResults(searchResults.projects, 'Proyectos', 'project')}
            </div>
        </div>
    );
}

export default SearchBar;

