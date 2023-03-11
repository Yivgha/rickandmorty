import React, { useState } from 'react';
import axios from "axios";
import "./SearchBar.scss";
import { AiOutlineSearch } from "react-icons/ai";

function SearchBar() {
    const [searchInput, setSearchInput] = useState("");
    const [content, setContent] = useState([]);

    const fetchSearch = async () => {
        try {
            const { data } = await axios.get(`https://rickandmortyapi.com/api/character`);
            setContent(data.results);
            return content;

        } catch (error) {
            console.error(error);
        }
    }

    const handleChange = (e) => {
        e.preventDefault();
        setSearchInput(e.target.value);
        fetchSearch(searchInput);
    };

    const handleKeyPress = (e) => {
        e.preventDefault();
        if (e.key === "Enter" || e.keyCode === 13 || e.code === "Enter") {
            fetchSearch(searchInput)
        }
    }
    if (searchInput.length > 0) {
        fetchSearch(searchInput);
    }

    return (
        <>
            <div className="Search">
                <button className="SearchIcon" type="submit " onClick={handleKeyPress}><AiOutlineSearch size={"18px"} color={"inherit"} /></button>

                <input className="Input" type="text" name="search" placeholder="Filter by name..." onChange={handleChange} onClick={handleKeyPress}
                    value={searchInput} />
            </div>

            {content.map((results) => {
                return (<div className="CharacterListItem" key={results.id}>
                    <div className="CharacterImg">
                        <img src={results.image} alt={results.name} width="100%" height="100%" />
                    </div>
                    <div className="CharacterDetails">
                        <p className="CharacterName">{results.name}</p>
                        <p className="CharacterSpecies">{results.species}</p>
                    </div>

                </div>)
            })}

        </>
    );
}

export default SearchBar;